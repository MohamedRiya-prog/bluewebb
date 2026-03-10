"use client"

import React from 'react'
import Link from "next/link";

const Page = () => {

    return (
        <div className="Home absolute left-80 top-5 right-5 h-[92%] rounded-xl flex items-center justify-center bg-white/60 ">
            <h1 className="Welcome-Msg flex justify-center gap-2 text-4xl leading-tight font-bold"  >
                Welcome to BlueWebb
                <Link href={"/signUp"} className="bg-[#0069A7] p-2 rounded-full text-2xl text-white">
                    Sign-up !
                </Link>
            </h1>
        </div>
    )
}
export default Page
