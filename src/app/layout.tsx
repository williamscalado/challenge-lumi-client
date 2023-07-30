import Menu from "@/components/menu";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumi | Energia",
  description: "**",
};

import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full bg-[color:var(--green-menu)]">
        <div className="flex justify-start h-full">
          <div className="h-screen w-[300px] p-4 bg-[color:var(--green-menu)]">
            <Menu />
          </div>
          <div className=" w-full rounded-l-3xl pl-5 pr-5	bg-[color:var(--children)]">
            {children}
            <ToastContainer />
          </div>
        </div>
      </body>
    </html>
  );
}
