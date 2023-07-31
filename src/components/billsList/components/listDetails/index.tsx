import { IBill } from "@/types/bill";
import { FileText } from "lucide-react";

interface IProps {
  MonthList: string[];
  dataBill: IBill[];
}

export default function ListDetails({ dataBill, MonthList }: IProps) {
  function verificaMesNoArray(month: string, arrayDatas: IBill[]) {
    return arrayDatas.some((dataString) => {
      const data = new Date(dataString.reference);
      const MonthDate = MonthList[data.getUTCMonth()];
      return MonthDate === month;
    });
  }
  return (
    <>
      <div className="flex space-x-3">
        {MonthList.map((item, key) => {
          const existMonth = verificaMesNoArray(item, dataBill);

          return (
            <>
              <div key={key} className="text-[12px]">
                <FileText
                  className={`${
                    existMonth ? "text-green-900" : "text-gray-200"
                  } `}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
