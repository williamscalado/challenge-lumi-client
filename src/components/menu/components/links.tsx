import Link from "next/link";
import { IMenuContent } from "..";

interface IMenu {
  menuData: IMenuContent[];
}
export default function LinksMenu({ menuData }: IMenu) {
  return (
    <nav>
      {menuData.map((item, key) => {
        return (
          <div key={key}>
            <Link href={item.link}>
              <div className="flex mb-3 p-2 pl-3 cursor-pointer rounded-md hover:bg-[#0D412E] ">
                <div className="mr-4 text-white  flex justify-center align-middle items-center">
                  {item.icon}
                </div>
                <div className="text-white text-sm  font-semibold">
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
