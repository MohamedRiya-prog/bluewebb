"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { ProductData } from "../components/type"; // Ensure this is the correct path and that ProductData is only declared there

import Navbar from "../components/navbar/Navbar";
import MainModal from "../components/modal/Modal";
import ResultsTableMainPage from "../components/reultsTable/ResultsTableMainPage";

export default function MainPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState<ProductData[]>([]);

  // Redirect unauthenticated users
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

  // Show loading state while auth check is in progress
  if (!isLoggedIn) return <div>Loading...</div>;

  // Placeholder for Excel export
  const handleExport = () => {
    alert("Exporting Data...");
    // TODO: Implement actual Excel export functionality here
  };

  // On modal form submit, add new product data to results list and close modal
  const handleModalSubmit = (data: ProductData) => {
    setResults((prev) => [...prev, data]);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-grayBackground min-h-screen flex flex-col relative">
      <Navbar />

      <div className="ml-6 mt-4 text-xl font-frutigerBold text-brandGray tracking-wide">
        PRODUCT SELECTION TOOL
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-4 mr-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-buttonGray text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-brand font-frutigerBold transition"
        >
          ADD
        </button>
        <button
          onClick={handleExport}
          className="bg-buttonGray text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-brand font-frutigerBold transition"
        >
          Export to Excel
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <MainModal onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
      )}

      {/* Results Display */}
      <div className="p-6 space-y-6">
        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((result, index) => (
              <ResultsTableMainPage key={index} data={result} />
            ))}
          </div>
        )}
      </div>

      {/* Watermark */}
      <div className="absolute bottom-10 right-6 text-brand text-2xl font-alexandriaB opacity-80">
        EXCELAIR
      </div>

      {/* Footer */}
      <footer className="text-brandGray py-4 text-center mt-auto">
        <p className="text-[8px]">
          &copy; 2025 Century Mechanical Systems Factory LLC. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
