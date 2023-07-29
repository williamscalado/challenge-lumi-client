"use client";
import { FileText, FileUp, LineChart, Moon } from "lucide-react";
import Image from "next/image";
import React from "react";
import LinksMenu from "./components/links";
export interface IMenuContent {
  link: string;
  name: string;
  icon?: React.ReactNode;
}

const menuContentLinks: IMenuContent[] = [
  {
    link: "dashboard",
    name: "Dashboard",
    icon: <LineChart size={16} />,
  },
  {
    link: "bills",
    name: "Histórico de faturas",
    icon: <FileText size={16} />,
  },
  {
    link: "upload",
    name: "Importar",
    icon: <FileUp size={16} />,
  },
];

export default function Menu() {
  return (
    <>
      <div className="w-full flex justify-end cursor-pointer     text-white ">
        <Moon size={18} />
      </div>
      <div className="flex w-[100%] justify-center align-middle mt-4 ">
        <Image src={"/logo-lumi.png"} alt="Lumi" width={161} height={70} />
      </div>
      <div className="bg-[color:var(--green-050)] h-[1px] mt-8 mb-4"></div>
      <div className="w=[100%]">
        <LinksMenu menuData={menuContentLinks} />
      </div>
    </>
  );
}
