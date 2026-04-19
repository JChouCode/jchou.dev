import { NextResponse } from "next/server";

const LEETCODE_API_URL = "https://leetcode-stats-api.herokuapp.com/jchoubankai";
const FALLBACK_STATS = {
    ranking: 59412,
    totalSolved: 801,
} as const;

type LeetCodeStats = {
    ranking: number;
    totalSolved: number;
};

function isValidStats(data: unknown): data is LeetCodeStats {
    if (!data || typeof data !== "object") {
        return false;
    }

    const candidate = data as Partial<LeetCodeStats>;

    return (
        typeof candidate.ranking === "number" &&
        Number.isFinite(candidate.ranking) &&
        typeof candidate.totalSolved === "number" &&
        Number.isFinite(candidate.totalSolved)
    );
}

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
            const response = await fetch(LEETCODE_API_URL, {
                cache: "no-store",
                next: { revalidate: 0 },
                signal: AbortSignal.timeout(5000),
            });

            if (!response.ok) {
                throw new Error(`leetcode upstream returned ${response.status}`);
            }

            const data = await response.json();

            if (!isValidStats(data)) {
                throw new Error("leetcode upstream returned invalid payload");
            }

            return data;
        } catch (error) {
            lastError =
                error instanceof Error
                    ? error
                    : new Error("unknown leetcode fetch error");

            if (attempt < 2) {
                await delay(500 * (attempt + 1));
            }
        }
    }

    throw lastError ?? new Error("failed to fetch leetcode stats");
}

export async function GET() {
    try {
        const stats = await fetchLeetCodeStats();
        return NextResponse.json(stats, {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        });
    } catch (error) {
        console.error("leetcode api route failed", error);

        return NextResponse.json(FALLBACK_STATS, {
            headers: {
                "Cache-Control": "no-store, max-age=0",
                "X-Leetcode-Fallback": "static",
            },
        });
    }
}
