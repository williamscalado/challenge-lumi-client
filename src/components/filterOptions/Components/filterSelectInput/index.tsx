interface IProps {
  handleFilterChange: (e: React.ChangeEvent<HTMLElement>) => void;
  data: any[];
  label?: string;
  name: string;
}
export default function FilterSelectInput({
  name,
  label,
  handleFilterChange,
  data,
}: IProps) {
  return (
    <>
      <label htmlFor="" className="text-sm mb-1 font-medium">
        {label}
      </label>
      <select
        name={name}
        id=""
        onChange={handleFilterChange}
        className="p-1  max-w-[300px] min-w-[200px] min-h-[40px] bg-slate-100 text-sm"
      >
        <option value="" selected disabled>
          Selecione
        </option>
        {data?.map((item) => {
          return (
            <>
              {" "}
              <option value={item}>{item}</option>
            </>
          );
        })}
      </select>
    </>
  );
}
