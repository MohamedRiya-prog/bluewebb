import React from 'react';
import Image from 'next/image';

const UserProfile = ({ imageUrl }) => {
    return (
        <div className="flex flex-row w-full items-center gap-2">
            <Image
                src={imageUrl || "/images/user.png"} // fallback to default
                alt="User Profile"
                width={40}
                height={40}
                className="rounded-full border border-gray-400"
            />
            <div className="flex flex-col">
                <button className="flex flex-row gap-1 items-center">
                    <h2 className="text-xs text-black ">
                        Mohamed Riyaz
                    </h2>
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </button>
                    <p className="text-[10px]">mohamedryaz.a@gmail.com</p>
            </div>


        </div>
    );
};

export default UserProfile;