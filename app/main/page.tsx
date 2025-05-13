"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/navbar/Navbar";
import Modal from "../components/modal/Modal"; // Import the Modal component

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/sign-in");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  // Function to handle exporting (placeholder for now)
  const handleExport = () => {
    alert("Exporting Data...");
  };

  return (
    <div className="bg-grayBackground min-h-screen flex flex-col">
      <Navbar />
      
      <div className="ml-6 font-frutigerBold">PRODUCT SELECTION TOOL</div>

      {/* Buttons Section */}
      <div className="flex justify-end gap-2 mt-3 mr-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-buttonGray text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-brand font-frutigerBold"
        >
          ADD
        </button>
        <button
          onClick={handleExport}
          className="bg-buttonGray text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-brand font-frutigerBold"
        >
          Export to Excel
        </button>
      </div>

      {/* Modal Component */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}

        <div className="absolute bottom-10 right-6 text-brand text-2xl font-alexandriaBold opacity-80">
  EXCELAIR
</div>

      <footer className="text-brandGray py-4 text-center mt-auto">
        <p className="text-[8px]">
          &copy; 2025 Century Mechanical Systems Factory LLC. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
