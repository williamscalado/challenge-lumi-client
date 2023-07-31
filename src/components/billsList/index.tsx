import { IBillByClient } from "@/types/bill";
import ListDetails from "./components/listDetails";

interface IProps {
  dataBill: IBillByClient[];
}
const MonthList = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export default function BillsList({ dataBill }: IProps) {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto ">
          <div className="inline-block min-w-full py-2">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-green-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className="  text-left px-6">
                      Cliente
                    </th>
                    <th scope="col" className=" text-left px-6 ">
                      UC
                    </th>
                    <th scope="col" className=" px-6 text-left py-4">
                      <div className="flex space-x-3">
                        {MonthList.map((item, key) => {
                          return (
                            <>
                              <div key={key} className="text-[12px]">
                                {item.toUpperCase()}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataBill.length > 0 &&
                    dataBill?.map((item: IBillByClient, key: number) => (
                      <>
                        <tr
                          key={key}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap text-left  px-6 py-4">
                            {item.client.name}
                          </td>
                          <td className="whitespace-nowrap text-left  px-6 py-4">
                            {item.client.client_number}
                          </td>
                          <td className="whitespace-nowrap text-left  px-6 py-4">
                            <ListDetails
                              dataBill={item.client.bill}
                              MonthList={MonthList}
                            />
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
