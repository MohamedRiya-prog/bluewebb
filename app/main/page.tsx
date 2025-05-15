"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { ProductData } from "../components/type";

import Navbar from "../components/navbar/Navbar";
import MainModal from "../components/modal/Modal";
import ResultsTableMainPage from "../components/reultsTable/ResultsTableMainPage";

export default function MainPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState<ProductData[]>([]);

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

  if (!isLoggedIn) return <div>Loading...</div>;

  const handleExport = () => {
    alert("Exporting Data...");
    // TODO: Implement actual Excel export functionality
  };

  const handleModalSubmit = (data: ProductData) => {
    setResults((prev) => [...prev, data]);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-grayBackground min-h-screen relative overflow-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Fixed Action Buttons */}
      <div className="fixed top-32   right-6 z-40 flex gap-2">
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

      {/* Fixed Watermark */}
      <div className="fixed bottom-10 right-6 text-brand text-2xl font-alexandriaBold opacity-80 z-40">
        EXCELAIR
      </div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full text-brandGray py-2 text-center text-[8px] z-50 border-t">
        &copy; 2025 Century Mechanical Systems Factory LLC. All Rights Reserved.
      </footer>

      {/* Scrollable Main Content */}
      <div className="pt-28 pb-20 px-6 overflow-y-auto max-h-screen space-y-6">
        {/* Title */}
        <div className="text-xl font-frutigerBold text-brandGray tracking-wide mt-4 ml-2">
          PRODUCT SELECTION TOOL
        </div>

        {/* Modal */}
        {isModalOpen && (
          <MainModal onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
        )}

        {/* Results Display */}
        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((result, index) => (
              <ResultsTableMainPage key={index} data={result} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
