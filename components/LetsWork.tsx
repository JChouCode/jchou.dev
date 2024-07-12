import EmailButton from "./EmailButton";
import HireButton from "./HireButton";
import ResumeButton from "./ResumeButton";

export default function LetsWork() {
    return (
        <div className="lg:mt-3 flex flex-col items-center">
            <div className="flex justify-center">
                <h2 className=" text-[20px] lg:text-[32px] font-semibold ">
                    Let&#39;s work together
                </h2>
            </div>
            <div className="mt-2 lg:mt-3 flex justify-center">
                <p className="text-xs lg:text-base text-secondary font-regular ">
                    Open to chat, find me below!
                </p>
            </div>
            <div className="mt-5 flex gap-1">
                <HireButton></HireButton>
                <EmailButton></EmailButton>
                <ResumeButton></ResumeButton>
            </div>
        </div>
    );
}
