"use client"

import React from 'react'
import Link from "next/link";

const Page = () => {

    return (
        <div className="Home absolute left-80 top-5 right-5 h-[92%] items-center justify-center rounded-xl flex bg-white overflow-hidden">
            <h1 className="Welcome-Msg flex justify-center gap-2 text-4xl leading-tight font-bold"  >
                <video src="/videos/01.mp4" autoPlay muted loop className=" absolute inset-0 h-screen w-screen object-cover block rounded-xl" >

                </video>
                <div className="flex absolute justify-center items-center">
                    Welcome to BlueWebb
                    <Link href={"/signUp"} className="bg-[#0069A7] p-2 rounded-full text-2xl text-white">
                        Sign-up !
                    </Link>
                </div>

            </h1>
        </div>
    )
}
export default Page
