"use client";
import { HttpAdapter } from "@/adapters/axios";
import LineChart from "@/components/charts/line";
import HeaderPage from "@/components/header";
import InfoCard from "@/components/infoCard";
import { Factory, Leaf, UtilityPole } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const getStatistics = async () => {
  return await HttpAdapter.fetch({
    method: "GET",
    url: `/bill/statistics/`,
  });
};
export default function Dashboard() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dataBill, setDataBill] = React.useState<any>({});

  const loadDataStatistics = React.useCallback(async () => {
    try {
      setLoading(true);

      const result = await getStatistics();
      setDataBill(result);
    } catch (error) {
      toast.error("Ocorreu um erro no servidor");
      setDataBill([]);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadDataStatistics();
  }, [loadDataStatistics]);
  return (
    <div>
      <HeaderPage title="Seja bem-vindo!" />
      <div className="flex space-x-4 my-4">
        <InfoCard
          title="Energia Gerada"
          info={`${dataBill._sum.energy_send_unit} kWh`}
          icon={<Factory size={24} />}
        />
        <InfoCard
          title="Energia Consumida"
          info={`${dataBill._sum.energy_unit} kWh`}
          icon={<UtilityPole size={24} />}
        />
        <InfoCard
          title="Energia Compensada"
          info={`${String(
            Number(dataBill._sum.energy_send_unit) -
              Number(dataBill._sum.energy_unit)
          )} kWh`}
          icon={<Leaf size={24} />}
        />
      </div>
      <div className=" w-[500px]  flex space-x-5">
        <LineChart title="Energia Consumida X Gerada" />
      </div>
    </div>
  );
}
