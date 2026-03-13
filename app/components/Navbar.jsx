"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ setActiveModule }) => {
    const currentDate = new Date();
    const formatDate = (date) =>
        date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    return (
        <div className="navbar-container bg-[#808284] absolute left-5 top-5 w-auto h-screen flex flex-col gap-5">
            <div className="NavLinks-container flex flex-col bg-white w-fit h-[70%] rounded-xl p-2 gap-5">
                <div className="flex flex-col items-center bg-black rounded-xl w-fit h-[80%] gap-1 p-1">

                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <Image src="/images/logo.png" width={32} height={32} alt="Logo" />
                        </Link>
                    </div>

                    <div className="h-6 w-px bg-gray-500 rotate-90"></div>

                    {/* Dashboard icon */}
                    <button onClick={() => setActiveModule("dashboard")}>
                        <Image src="/images/dashboard.png" width={24} height={24} alt="Dashboard" />
                    </button>

                    {/* Calculator icon */}
                    <button onClick={() => setActiveModule("calculator")} className="pt-5">
                        <Image src="/images/calculator.png" width={24} height={24} alt="Calculator" />
                    </button>
                </div>

                {/* Date */}
                <div className="flex items-center justify-between [writing-mode:vertical-rl] rotate-180 font-bold text-xs text-gray-500">
                    {formatDate(currentDate)}
                </div>
            </div>

            {/* Settings at bottom */}
            <div className="NavSetting-Container flex flex-col items-center justify-between p-2 bg-white w-auto h-[20%] rounded-xl">
                <div></div>
                <div className="flex flex-col items-center bg-black rounded-xl w-auto h-25 gap-1 p-1 rotate-180">
                    <button onClick={() => setActiveModule("settings")}>
                        <Image src="/images/settings.png" width={32} height={32} alt="Settings" />
                    </button>
                    <div className="h-6 w-px bg-gray-500 rotate-90"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;