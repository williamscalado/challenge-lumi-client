interface IProps {
  title: string;
  info: string;
  icon?: React.ReactNode;
}
export default function InfoCard({ title, info, icon }: IProps) {
  return (
    <div className="w-[260px] h-[130px] bg-white rounded-lg p-4 shadow-lg flex flex-col ">
      <div className="w-full flex justify-between ">
        <span className="text-gray-600 font-bold text-[14px] text-right">
          {title}
        </span>
        <span className="text-[14px] text-green-600 items-center flex ">
          {icon}
        </span>
      </div>
      <div className=" flex flex-col  justify-end h-full font-semibold  ">
        <span className="text-[32px]">{info}</span>
      </div>
    </div>
  );
}
