import single from "./tables.module.css";

type SingleProps = {
  data?: string[] | number[];
  name: string;
};

export function SingleTable({ data, name }: SingleProps) {
  return (
    <div className={single.box}>
      <div className={single.title}> {name} </div>
      {data?.map((e, i) => (
        <div key={`${e}${i}`} className={single.row}>
          {e}
        </div>
      ))}
    </div>
  );
}
