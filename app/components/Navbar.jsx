import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    const currentDate = new Date();
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

        return (
        <div className="navbar-container bg-[#808284] absolute left-5 top-5 w-auto h-screen flex flex-col gap-5">
            <div className="NavLinks-container flex flex-col bg-[#BDBDBD] w-fit h-[70%] rounded-xl p-2 gap-5">
                <div className="flex flex-col items-center bg-black rounded-xl w-fit h-[80%] gap-1 p-1">
                    <a>
                        <Image src="/images/logo.png" width={32} height={32} alt="Logo"/>
                    </a>
                    <div className="h-6 w-px bg-gray-500 shadow-[1px_0_0_rgba(255,255,255,0.4),-1px_0_0_rgba(0,0,0,0.4)] rotate-90"></div>

                </div>
                <div className="flex items-center justify-between [writing-mode:vertical-rl] rotate-180 font-bold text-xs text-gray-500" >
                    {formatDate(currentDate)}
                </div>
            </div>
            <div className="NavSetting-Container flex flex-col items-center justify-between p-2 bg-[#BDBDBD] w-auto h-[20%] rounded-xl">
                <div className="flex items-center justify-between [writing-mode:vertical-rl] rotate-180 font-bold text-xs text-gray-500 " >

                </div>
                <div className="flex flex-col items-center bg-black rounded-xl w-fit h-fit gap-5 p-1">
                    <a>
                        <Image src="/images/settings.png" width={32} height={32} alt="Logo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Navbar
