import single from "./tables.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";

type SingleProps = {
  data?: string[] | number[];
  name: string;
};

export function SingleTable({ data, name }: SingleProps) {
  const lightDate = useSelector((state: RootState) => state.light.date);
  const light = (date: string | number) =>
    date === lightDate ? single.accent : "";
  return (
    <div className={single.box}>
      <div className={single.title}> {name} </div>
      {data?.map((e, i) => (
        <div key={`${e}${i}`} className={`${single.row} ${light(e)}`}>
          {e}
        </div>
      ))}
    </div>
  );
}
