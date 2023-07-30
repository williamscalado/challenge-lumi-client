"use client";
import HeaderPage from "@/components/header";

export default function Bill() {
  return (
    <div>
      <HeaderPage title="Histórico de Faturas" />
      <div>
        <span className="font-bold text-sm">Filtros</span>
        <div className="flex space-x-5 align-middle items-end bg-white p-5 rounded-2xl mt-3 w-max">
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm mb-1 font-medium">
              Selecione a UC
            </label>
            <select
              name=""
              id=""
              className="p-1 rounded-md max-w-[300px] min-w-[200px] min-h-[40px] bg-slate-200 text-sm"
            >
              <option value="">Selecione</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm mb-1 font-medium">
              Mês
            </label>
            <select
              name=""
              id=""
              className="p-1 rounded-md max-w-[300px] min-w-[200px] min-h-[40px] bg-slate-200 text-sm"
            >
              <option value="">Selecione</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm mb-1 font-medium">
              Ano
            </label>
            <select
              name=""
              id=""
              className="p-1 rounded-md max-w-[300px] min-w-[200px] min-h-[40px] bg-slate-200 text-sm"
            >
              <option value="">Selecione</option>
            </select>
          </div>
          <div className="flex flex-col">
            <button className="rounded-lg bg-green-900 min-h-[40px] min text-xs font-bold pl-4 pr-4 text-white">
              FILTRAR
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex space-x-5 align-middle items-end bg-white p-5 rounded-2xl mt-3 ">
            lista
          </div>
        </div>
      </div>
    </div>
  );
}
