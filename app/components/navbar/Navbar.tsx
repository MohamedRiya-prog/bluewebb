"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase"; // Ensure your Firebase is set up correctly
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AiOutlineLogout } from "react-icons/ai"; // Importing logout icon
import { useRouter } from "next/navigation"; // Using Next.js router
import Link from "next/link"; // Importing Link for navigation

export default function NavBar() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter(); // Next.js router to handle navigation

  useEffect(() => {
    // Listening for authentication changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Set user email if logged in
      } else {
        setUserEmail(null); // No user logged in, reset the email
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const handleLogout = async () => {
    await signOut(auth);  // Firebase sign-out
    router.push("/signin"); // Redirect to /signin after logout
  };

  return (
    <nav className="bg-brand rounded-full text-white p-2 flex justify-between items-center shadow-md mx-4 mt-4 mb-4">
      {/* Clickable "Bluewebb" logo to go to the main page */}
      <div className="flex items-center ml-4">
      <Link href="/" className="text-lg font-bold hover:text-gray-300">
        Bluewebb
      </Link>
      </div>

      {userEmail ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm font-frutiger">{userEmail}</span>
          <button 
            onClick={handleLogout} 
            className="bg-transparent hover:bg-red-600 text-white p-2 rounded-full"
          >
            <AiOutlineLogout size={20} /> {/* Logout icon */}
          </button>
        </div>
      ) : (
        <span className="text-sm">Not Logged In</span>
      )}
    </nav>
  );
}
