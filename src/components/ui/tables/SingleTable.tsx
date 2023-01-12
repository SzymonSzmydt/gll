import single from "./tables.module.css";

type SingleProps = {
  id?: number[];
  num?: number;
  data?: string[] | number[];
  name: string;
};

export function SingleTable({ id, num, data, name }: SingleProps) {
  return (
    <div className={single.box}>
      <div className={single.title}> {name} </div>
      {data?.map((e, i) => (
        <div key={`${e}${i}`} className={single.map}>
          {e}
        </div>
      ))}
    </div>
  );
}
