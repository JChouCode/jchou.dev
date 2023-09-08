export default function EmailButton() {
    return (<a className=" font-[sans-serif] shadow-button flex justify-center w-[116px] h-[36px] bg-white border-light-gray border-2 rounded-md text-black">
        <div className="flex justify-between items-center w-[85%]">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width='14px' height='14px' viewBox="0 0 24 24"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="rgba(255,255,255,1)"></path></svg> */}
            <div className="flex justify-center items-center h-[16px] w-[16px] rounded-full border-white border-[1px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M 12.5 13.794 L 7.5 13.794 C 6.948 13.794 6.5 13.346 6.5 12.794 L 6.5 6.794 C 6.5 6.241 6.948 5.794 7.5 5.794 L 12.5 5.794 C 13.052 5.794 13.5 6.241 13.5 6.794 L 13.5 12.794 C 13.5 13.346 13.052 13.794 12.5 13.794 Z" fill="transparent" stroke-width="1.5" stroke="rgb(128,135,151)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 9.5 3.722 L 9.5 2.794 C 9.5 2.241 9.052 1.794 8.5 1.794 L 3.5 1.794 C 2.948 1.794 2.5 2.241 2.5 2.794 L 2.5 9.794 C 2.5 10.346 2.948 10.794 3.5 10.794 L 4.364 10.794" fill="transparent" stroke-width="1.5" stroke="rgb(128,135,151)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="" opacity="0.5"></path></svg>            </div>
            <div className='font-medium text-sm'>Copy Email</div>
        </div>
    </a>)
}
