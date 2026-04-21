import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";
const LEETCODE_USERNAME = "jchoubankai";
const FALLBACK_STATS = {
    ranking: 58926,
    totalSolved: 802,
} as const;
const LEETCODE_PROFILE_QUERY = `
    query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
            profile {
                ranking
            }
            submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                }
            }
        }
    }
`;

type LeetCodeStats = {
    ranking: number;
    totalSolved: number;
};

type GraphQLStatsResponse = {
    data?: {
        matchedUser?: {
            profile?: {
                ranking?: number;
            };
            submitStatsGlobal?: {
                acSubmissionNum?: Array<{
                    difficulty?: string;
                    count?: number;
                }>;
            };
        };
    };
};

function extractStats(data: unknown): LeetCodeStats | null {
    if (!data || typeof data !== "object") {
        return null;
    }

    const response = data as GraphQLStatsResponse;
    const ranking = response.data?.matchedUser?.profile?.ranking;
    const solvedStats = response.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    const totalSolved = solvedStats?.find(
        (entry) => entry.difficulty === "All"
    )?.count;

    if (
        typeof ranking !== "number" ||
        !Number.isFinite(ranking) ||
        typeof totalSolved !== "number" ||
        !Number.isFinite(totalSolved)
    ) {
        return null;
    }

    return {
        ranking,
        totalSolved,
    };
}

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
            const response = await fetch(LEETCODE_GRAPHQL_URL, {
                method: "POST",
                cache: "no-store",
                next: { revalidate: 0 },
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: LEETCODE_PROFILE_QUERY,
                    variables: {
                        username: LEETCODE_USERNAME,
                    },
                }),
                signal: AbortSignal.timeout(5000),
            });

            if (!response.ok) {
                throw new Error(`leetcode upstream returned ${response.status}`);
            }

            const data = await response.json();
            const stats = extractStats(data);

            if (!stats) {
                throw new Error("leetcode upstream returned invalid payload");
            }

            return stats;
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
