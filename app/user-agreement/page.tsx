"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for client components
import { auth } from "@/lib/firebase"; // Assuming you have your Firebase setup here
import { onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";

export default function UserAgreementPage() {
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

  // Function to handle Agree action (Navigate to homepage)
  const handleAgree = () => {
    router.push("/main");  // Navigate to the homepage
  };

  // Function to handle Cancel action (Log out and navigate to sign-in page)
  const handleCancel = () => {
    signOut(auth).then(() => {
      router.push("/signin");  // Navigate to sign-in page after logging out
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div className="bg-grayBackground min-h-screen flex justify-center flex-col items-center">
      <div className="w-full max-w-7xl bg-white p-5 rounded shadow-lg h-max">
        <div className="flex flex-row items-center justify-center mt-10">
          <Image
            src="/excelairlogo.png"
            alt="excelair logo"
            width={48}
            height={48}
            className=""
          />
          <h1 className="ml-4 font-frutigerBold tracking-[5px]">CMS WEB SITE USER AGREEMENT</h1>
        </div>
        <div>
          <div className="font-frutiger text-[8px] mt-4 uppercase">
            <span className="font-frutigerBold">PLEASE READ THIS AGREEMENT CAREFULLY</span> This agreement governs your use of the CMS website. By accessing or using the Website, you confirm that you have read, understood, and agree to be bound by this agreement. If you do not agree to these terms, you are not permitted to use the Website. The terms of this agreement may be updated periodically. Each time you use the Website, the latest version of this agreement will apply. Please check the date of the agreement and review any updates to ensure you are informed of any changes. This agreement includes important provisions, including limitations on liability. Your continued use of the Website signifies your acceptance of these terms.
          </div>
          <h1 className="font-frutigerBold text-xs mt-4">YOUR ACCEPTANCE OF THIS AGREEMENT</h1>
          <div className="font-frutiger text-[8px] mt-4 uppercase">
            This agreement governs your use of the CMS website, its content, and the services and products provided through the website. By using the website, you confirm your acceptance of this agreement, as well as the acceptance of anyone you represent for the purposes of this agreement, person includes individuals, organizations, and any incorporated or unincorporated entities. You further represent and warrant that you have the legal authority to accept and agree to this agreement on behalf of yourself and anyone you represent. If you disagree with any part of this agreement, or if you are not authorized to accept it on behalf of yourself or others, you may not use the website.
          </div>
          <h1 className="font-frutigerBold text-xs mt-4">PERMITTED USERS AND ACCESS</h1>
          <div className="font-frutiger text-[8px] mt-4 uppercase">
            THIS WEBSITE IS DESIGNED FOR AND MAY SOLELY BE USED BY DISTRIBUTORS OF PRODUCTS OFFERED ON THIS WEBSITE AND BY THEIR EMPLOYEES OR REPRESENTATIVES DULY AUTHORIZED BY SUCH DISTRIBUTORS, WHO HAVE BEEN DULY AUTHORIZED BY CENTURY MECHANICAL SYSTEMS FACTORY LLC, TO ACCESS AND USE THIS WEBSITE PERMITTED USERS. IF YOU ARE NOT A PERMITTED USER, THIS AGREEMENT DOES NOT APPLY TO YOU AND YOU SHOULD IMMEDIATELY LEAVE THIS WEBSITE. SHOULD YOU DECIDE TO CONTINUE ON THIS WEBSITE, LEGAL ACTION MAY BE TAKEN AGAINST YOU FOR DAMAGES RESULTING FROM UNAUTHORIZED USE OF THIS WEBSITE.
            IN ADDITION TO THE ABOVE, THE WEBSITE MAY BE USED ONLY BY SUCH PERMITTED USERS WHO CAN FORM LEGALLY BINDING CONTRACTS UNDER APPLICABLE LAW. THE WEBSITE MAY NOT BE USED BY PERSONS IN JURISDICTIONS WHERE ACCESS TO OR USE OF THE WEBSITE OR ANY PART OF IT MAY BE ILLEGAL OR PROHIBITED. IT IS SOLELY YOUR RESPONSIBILITY TO DETERMINE WHETHER YOUR USE OF THE WEBSITE IS LAWFUL, AND YOU MUST COMPLY WITH ALL APPLICABLE LAWS.
          </div>
          <h1 className="font-frutigerBold text-xs mt-4">MISPRINTS AND ERRORS</h1>
          <div className="font-frutiger text-[8px] mt-4 uppercase">
            <span className="font-frutigerBold">CMS ENDEAVORS TO PROVIDE CURRENT AND ACCURATE PERFORMANCE INFORMATION ON THE WEBSITE.</span> However, errors, misprints, or inaccuracies may occur. Therefore, unless otherwise stated on the website or in a separate agreement between you and CMS, CMS reserves the right to change the performance values, specifications, and other technical information related to the goods and services available through the website at any time, without prior notice or liability to you or any other person.
            Additionally, CMS cannot guarantee that the performance values or specifications displayed on the website will remain available or accurate when you make a request or order. CMS also reserves the right to reject, correct, cancel, or terminate any request.
          </div>
          <h1 className="font-frutigerBold text-xs mt-4">CONFIDENTIALITY AND NON-DISCLOSURE</h1>
          <div className="font-frutiger text-[8px] mt-4 uppercase">
            <span className="font-frutigerBold">By accepting and agreeing to these terms.</span> you acknowledge and agree that the CMS website contains confidential information, including but not limited to performance data, technical details, and other proprietary information related to the products offered on this website. Access provided to authorized users by CMS is granted solely for the purpose of evaluating product performance values and specifications. You agree to maintain the confidentiality of all such information and use it exclusively for the purpose stated above. You further agree not to misuse this information in any way that could harm CMS or its affiliated entities, such as disclosing privileged information to competitors or using it to secure concessions from competitors of CMS and its affiliates.
          </div>

          {/* Agree and Cancel buttons */}
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handleAgree}
              className="px-6 py-2 bg-brandGray hover:bg-brand text-white rounded-full font-frutiger"
            >
              Agree
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-2 bg-red-600 hover:bg-brand text-white rounded-full font-frutiger"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
        <footer className=" text-brandGray text-xs py-4 text-center mt-auto">
            Copyright 2025,Century Mechanical Systems Factory LLC. All Rights Reserved.
        </footer>
    </div>
  );
}
