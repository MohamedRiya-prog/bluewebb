import React from 'react'
import UserProfile from "./UserProfile"

const Sidebar = () => {
    return (
        <div className="Sidebar absolute w-auto bg-white/60 rounded-xl top-5 h-[92%] left-24 p-2">
           <div className="flex flex-col p-2 w-full h-full gap-3 ">
               <div className="flex flex-col gap-2">
                   <UserProfile />

               </div>
               <div className="w-auto h-px bg-gray-500 "></div>
           </div>
        </div>
    )
}
export default Sidebar
