"use client";
import { HttpAdapter } from "@/adapters/axios";
import LineChart from "@/components/charts/line";
import HeaderPage from "@/components/header";
import InfoCard from "@/components/infoCard";
import { CircleSlash, Factory, Leaf, UtilityPole } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const getStatistics = async () => {
  return await HttpAdapter.fetch({
    method: "GET",
    url: `/bill/statistics/`,
  });
};
export default function Dashboard() {
  const [dataBill, setDataBill] = React.useState<any>({});

  const loadDataStatistics = React.useCallback(async () => {
    try {
      const result = await getStatistics();
      setDataBill(result);
    } catch (error) {
      toast.error("Ocorreu um erro no servidor");
      setDataBill([]);
    }
  }, []);

  const energySend = dataBill?.metricsToMonth?._sum?.energy_send_unit;
  const energyPay = dataBill?.metricsToMonth?._sum?.energy_unit;

  React.useEffect(() => {
    loadDataStatistics();
  }, [loadDataStatistics]);

  return (
    <div>
      <HeaderPage title="Seja bem-vindo!" />
      <div className="flex space-x-4 my-4">
        {energySend && (
          <InfoCard
            title="Energia Gerada"
            info={`${energySend} kWh`}
            icon={<Factory size={24} />}
          />
        )}

        {energyPay && (
          <InfoCard
            title="Energia Consumida"
            info={`${energyPay} kWh`}
            icon={<UtilityPole size={24} />}
          />
        )}

        {energySend && (
          <InfoCard
            title="Energia Compensada"
            info={`${String(Number(energySend) - Number(energyPay))} kWh`}
            icon={<Leaf size={24} />}
          />
        )}
      </div>
      {energySend && (
        <div className=" w-[500px]  flex space-x-5">
          <LineChart
            metricsData={dataBill.metricsToYear}
            title="Energia Consumida X Gerada"
          />
        </div>
      )}
      {!energySend && (
        <div className="w-full flex align-middle items-center justify-center text-[18px] text-gray-400">
          <CircleSlash size={16} className="mr-2" />
          Sem registro
        </div>
      )}
    </div>
  );
}
