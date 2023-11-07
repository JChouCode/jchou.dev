import Experience from "./Experience";
import ResumeButton from "./ResumeButton";
import { Badge, Color } from "./Badge";

export default function Work() {
    return (
        <div className="flex flex-col bg-pane-gray justify-center py-2 pb-5 rounded-lg px-4 mb-9 lg:mb-10">
            <div className="flex justify-between items-center rounded-lg">
                <div className="flex items-center">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mr-3 "></div>
                    <div className="font-medium text-xs lg:text-base">Experience</div>
                </div>
                <ResumeButton></ResumeButton>
            </div>
            <Experience photoPath="/apollo.png" company="Apollo GraphQL" title="Software Engineer">
                <Badge text="Fullstack" color={Color.PINK}></Badge>
                <Badge text="Cloud Infra" color={Color.BLUE}></Badge>
                <Badge text="DevOps" color={Color.PURPLE}></Badge>
            </Experience>
            <Experience photoPath="/apollo.png" company="Apollo GraphQL" title="Software Engineer Intern">
                <Badge text="Fullstack" color={Color.PINK}></Badge>
                <Badge text="DevOps" color={Color.PURPLE}></Badge>
            </Experience>
            <Experience photoPath="/servicenow.png" company="ServiceNow" title="Software Engineer Intern">
                <Badge text="Fullstack" color={Color.PINK}></Badge>
            </Experience>
            <Experience photoPath="/iotex.png" company="IoTeX" title="Software Engineer Intern">
                <Badge text="Fullstack" color={Color.PINK}></Badge>
                <Badge text="Crypto" color={Color.ORANGE}></Badge>
            </Experience>
            <Experience photoPath="/nasared.png" company="NASA" title="Planetary Sciences Intern">
                <Badge text="Research" color={Color.GREEN}></Badge>
                <Badge text="Data" color={Color.RED}></Badge>
            </Experience>
        </div>)
}
