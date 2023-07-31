"use client";
import { HttpAdapter } from "@/adapters/axios";
import Loading from "@/components/Loading";
import BillsList from "@/components/billsList";
import FilterOptions, { IFiltersProps } from "@/components/filterOptions";
import HeaderPage from "@/components/header";
import { IBill } from "@/types/bill";
import { CircleSlash } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const getDataBill = async (filter?: any) => {
  const opt2 =
    filter?.clientNumber != undefined ? `${filter?.clientNumber}/` : "";
  const opt1 = filter?.year != undefined ? `${filter?.year}/` : "";
  console.log(filter?.year);

  console.log(`/bill/client/${opt1}${opt2}`);
  return await HttpAdapter.fetch({
    method: "GET",
    url: `/bill/client/${opt1}${opt2}`,
  });
};

export default function Bill() {
  const [dataBill, setDataBill] = React.useState<IBill[] | any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const loadDataAllBills = React.useCallback(async (filter?: IFiltersProps) => {
    try {
      setLoading(true);
      console.log(filter);
      const result = await getDataBill(filter);
      setDataBill(result);
    } catch (error) {
      toast.error("Ocorreu um erro no servidor");
      setDataBill([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChangeFilter = (filter: any) => {
    console.log(filter);
    loadDataAllBills(filter);
  };

  React.useEffect(() => {
    loadDataAllBills();
  }, [loadDataAllBills]);

  return (
    <div>
      <HeaderPage title="Histórico de Faturas" />
      <div>
        <span className="font-bold text-sm">Filtros</span>
        <FilterOptions handleChangeFilter={handleChangeFilter} />
        <div className="mt-10">
          {loading && (
            <div className=" w-full h-full flex justify-center items-center z-50">
              <Loading />
            </div>
          )}
          {dataBill.length > 0 ? (
            <BillsList dataBill={dataBill} />
          ) : (
            <div className="w-full flex align-middle items-center justify-center text-[18px] text-gray-400">
              <CircleSlash size={16} className="mr-2" />
              Sem registro
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
