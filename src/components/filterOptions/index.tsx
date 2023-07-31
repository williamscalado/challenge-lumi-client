"use client";
import { HttpAdapter } from "@/adapters/axios";
import { XCircle } from "lucide-react";
import React from "react";
import FilterSelectInput from "./Components/filterSelectInput";

export interface IFiltersProps {
  years: number[];
  clientsNumber: string[];
}
interface IProps {
  handleChangeFilter: (filter: { [key: string]: string }) => void;
}
export default function FilterOptions({ handleChangeFilter }: IProps) {
  const [filterData, setFilterData] = React.useState({} as IFiltersProps);
  const [filter, setFilter] = React.useState(
    {} as {
      [key: string]: string;
    }
  );
  const getDataFilter = React.useCallback(async () => {
    const result: IFiltersProps = await HttpAdapter.fetch({
      method: "GET",
      url: "/bill/metadata",
    });
    setFilterData(result);
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { value, name } = e.target as HTMLInputElement;
    setFilter({
      ...filter,
      [name]: value,
    });
  };
  React.useEffect(() => {
    getDataFilter();
  }, [getDataFilter]);

  return (
    <div className="flex space-x-5 align-middle items-end bg-white p-5 rounded-2xl mt-3 w-max">
      <div className="flex flex-col">
        <FilterSelectInput
          label="Selecione e UC"
          name="clientNumber"
          data={filterData?.clientsNumber}
          handleFilterChange={handleFilterChange}
        />
      </div>

      <div className="flex flex-col">
        <FilterSelectInput
          label="Ano"
          name="year"
          data={filterData?.years}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="flex items-center ">
        <div>
          <button onClick={() => handleChangeFilter({})} type="reset">
            <XCircle className="mr-2 text-red-500 cursor-pointer" />
          </button>
        </div>
        <button
          onClick={() => handleChangeFilter(filter)}
          type="button"
          className="rounded-lg uppercase bg-green-900 min-h-[40px] min text-xs font-bold pl-4 pr-4 text-white"
        >
          Procurar
        </button>
      </div>
    </div>
  );
}
