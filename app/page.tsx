"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/signin"); // Redirect to the sign-in page after 3 seconds
    }, 3000); // Adjust the delay time as needed (in milliseconds)

    // Clean up the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 gap-16 sm:p-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center"
      >
        <Image
          className="dark:invert"
          src="/excelairlogo.png"
          alt="Your company logo"
          width={180}
          height={38}
          priority
        />
      </motion.div>
      <div className="-mt-10 font-frutigerBold">CENTURY MECHANICAL SYSTEMS</div>
    </div>
  );
}
