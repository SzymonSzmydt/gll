import { dataWithDraw } from "../../../context/redux/dbSlice";
import { Ball } from "../../../components/buttons/Ball";
type GenerateProps = {
  data50: dataWithDraw[];
};

export function Generate({ data50 }: GenerateProps) {
  console.log(data50);
  return (
    <div>
      <section>
        <p> Liczby, które najrzadziej wypadły</p>
        {data50.map((e) =>
          e.draw[e.draw.length - 1] >= 15 ? <Ball>{e.num} </Ball> : null
        )}
      </section>
    </div>
  );
}
