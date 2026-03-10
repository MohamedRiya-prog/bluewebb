import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "BlueWebb",
  description: "Excelair Product Selection Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable}  antialiased`}
      >
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
