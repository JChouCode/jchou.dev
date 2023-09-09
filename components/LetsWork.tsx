import EmailButton from "./EmailButton";
import HireButton from "./HireButton";
import ResumeButton from "./ResumeButton";

export default function LetsWork() {
    return (<div className="mt-3 flex flex-col items-center">
        <div className="flex justify-center">
            <h2 className="text-[37px] font-semibold ">Let&#39;s work together</h2>
        </div>
        <div className="mt-3 flex justify-center">
            <p className="text-md text-secondary font-regular ">Open to New Grad and SWE I/II Roles</p>
        </div>
        <div className="mt-5 flex gap-2">
            <HireButton></HireButton>
            <EmailButton></EmailButton>
            <ResumeButton></ResumeButton>
        </div>
    </div >)
}
