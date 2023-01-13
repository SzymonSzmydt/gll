import { dataWithDraw } from "../../../context/redux/dbSlice";
type GenerateProps = {
  data50: dataWithDraw[];
};

export function Generate({ data50 }: GenerateProps) {
  return (
    <div>
      <section>
        <p> Liczby, które najrzadziej wypadły</p>
      </section>
    </div>
  );
}
