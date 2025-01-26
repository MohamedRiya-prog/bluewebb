"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation"; // Import `useRouter` from next/navigation
import Image from "next/image";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  const router = useRouter();

  const handleSignIn = async () => {
    setIsLoading(true); // Set loading to true when sign-in starts
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Signed in successfully!");
      setError(""); // Clear any previous error messages
      setShowPopup(true); // Show the popup message

      // Hide the popup and redirect after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
        router.push("/user-agreement"); // Redirect to the user agreement page
      }, 3000); // Duration for the popup to be visible
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError("Failed to sign in");
      setShowPopup(true); // Show the popup message
    } finally {
      setIsLoading(false); // Set loading to false after the process
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen gap-4"
      style={{ backgroundImage: "url('/ProductRangeImage.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
        <div className="flex justify-center mb-6">
          <Image 
            src="/cmslogo.png"
            alt="cms-logo"
            width={150}
            height={65}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-lg mb-4 text-center font-frutiger">Sign In</h1>
        <h1 className="text-xs mb-4 -mt-5 text-center font-frutiger">
          Continue to <span className="text-brand text-lg">Bluewebb</span>
        </h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border-b p-3 mb-4 -mt-4 focus:outline-none focus:border-blue-500 font-frutiger text-brandGray"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border-b p-3 mb-4 -mt-4 focus:outline-none focus:border-blue-500 font-frutiger text-brandGray"
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-brandGray hover:bg-brand text-white p-3 rounded mb-4"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>

        <div className="text-xs text-center text-brandGray">
          By proceeding, I agree to the Terms of Service and Privacy Notice of Century Mechanical Systems
        </div>
        <div className="text-xs text-center text-brandGray">
          Copyright 2025, Century Mechanical Systems Factory LLC. All Rights Reserved.
        </div>

        {showPopup && (
          <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full p-4 rounded-lg text-white ${
              successMessage ? "bg-green-500" : "bg-red-500"
            } shadow-lg text-center`}
          >
            {successMessage || error}
          </div>
        )}
      </div>
    </div>
  );
}
