import { Bell, Moon } from "lucide-react";

interface IPropsHeader {
  title: string;
}

export default function HeaderPage({ title }: IPropsHeader) {
  return (
    <div className="flex justify-between pt-4">
      <div className=" text-xl font-bold mb-5">{title}</div>
      <div className="text-green-900 flex space-x-2">
        <Moon size={22} className="cursor-pointer" />
        <Bell size={22} className="cursor-pointer" />
      </div>
    </div>
  );
}
