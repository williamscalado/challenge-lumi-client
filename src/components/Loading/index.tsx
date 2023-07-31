import { ProgressBar } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        barColor="#DDD"
        borderColor="#02231C"
      />
    </>
  );
}
