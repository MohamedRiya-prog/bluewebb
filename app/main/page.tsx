"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/navbar/Navbar";
import MainModal from "../components/modal/Modal"; // Changed from `Modal` to `MainModal`
import ResultsTableMainPage from "../components/reultsTable/ResultsTableMainPage";

type ResultData = {
  type: string;
  width: string;
  height: string;
  airflow: string;
};

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedResults, setSubmittedResults] = useState<ResultData[]>([]);
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

  const handleExport = () => {
    alert("Exporting Data...");
  };

  const handleModalSubmit = (data: ResultData) => {
    setSubmittedResults((prev) => [...prev, data]);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-grayBackground min-h-screen flex flex-col">
      <Navbar />

      <div className="ml-6 font-frutigerBold">PRODUCT SELECTION TOOL</div>

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

      {isModalOpen && (
        <MainModal onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
      )}

      <div className="p-6 space-y-6">
        {submittedResults.length > 0 && (
          <div className="space-y-4">
            {submittedResults.map((result, index) => (
              <ResultsTableMainPage key={index} data={result} />
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-10 right-6 text-brand text-2xl font-alexandriaB opacity-80">
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
