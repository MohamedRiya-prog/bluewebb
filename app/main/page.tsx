"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for client components
import { auth } from "@/lib/firebase"; // Assuming you have your Firebase setup here
import { onAuthStateChanged } from "firebase/auth";

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track user's login state
  const router = useRouter();  // Router to handle navigation

  useEffect(() => {
    // Firebase auth state change listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);  // User is logged in
      } else {
        setIsLoggedIn(false);  // User is not logged in, redirect to sign-in page
        router.push("/sign-in");  // Redirect to sign-in page if not logged in
      }
    });

    return () => unsubscribe();  // Clean up the listener when component unmounts
  }, [router]);  // Add router to dependencies to avoid warnings

  if (!isLoggedIn) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return (
    <div className="bg-grayBackground min-h-screen flex flex-col justify-between">
     Main Page coming soon...
      <footer className= "text-brandGray py-4 text-center mt-auto">
        <p className="text-[8px]">
          &copy; 2025 Century Mechanical Systems Factory LLC. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
