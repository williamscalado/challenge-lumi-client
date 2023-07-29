import Menu from "@/components/menu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumi | Energia",
  description: "**",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-full bg-[color:var(--green-menu)]">
        <div className="flex justify-start h-full">
          <div className="h-screen w-[300px] p-4 bg-[color:var(--green-menu)]">
            <Menu />
          </div>
          <div className="bg-white w-full rounded-l-3xl	bg-[color:var(--children)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
