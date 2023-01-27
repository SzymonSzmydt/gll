import db from "./record.module.css";
import { Ball } from "../../../../components/buttons/Ball";
import { useState, useRef } from "react";
import { BtnVariant } from "../../../../components/buttons/BtnVariant";
import { doc, setDoc } from "firebase/firestore";
import { dataBase } from "../../../../context/firebase/firebase";
import { Window } from "../../../../components/windows/Window";
import { arrayGenerator } from "../../../../context/hooks/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../context/redux/Store";

const green = (num: number, val: number) => (num === val ? db.green : "");

export function DbAddRecord() {
  const catche50 = useSelector((state: RootState) => state.light.normal1);
  const idValue = useSelector((state: RootState) => state.database.value);
  const [ballNumber50, setBallNumber50] = useState<number[]>([]);
  const [ballNumber2, setBallNumber2] = useState<number[]>([]);
  const dateRef = useRef<HTMLInputElement | null>(null);

  const handleClick50 = (num: number, del: boolean) => {
    if (!del && ballNumber50.length < 5 && !ballNumber50.includes(num))
      setBallNumber50([...ballNumber50, num]);
    if (del) setBallNumber50(ballNumber50.filter((e) => e !== num));
    return;
  };
  const handleClick2 = (num: number, del: boolean) => {
    if (ballNumber2.length < 2 && !ballNumber2.includes(num))
      setBallNumber2([...ballNumber2, num]);
    if (del) setBallNumber2(ballNumber2.filter((e) => e !== num));
    return;
  };
  const saveNumbersToFirestore = async () => {
    const copy1 = ballNumber50.map((e) => e).sort((a, b) => a - b);
    const copy2 = ballNumber2.map((e) => e).sort((a, b) => a - b);
    if (
      "" + catche50 !== "" + ballNumber50 &&
      ballNumber50.length === 5 &&
      ballNumber2.length === 2 &&
      dateRef.current?.value
    ) {
      setDoc(
        doc(dataBase, "jackpot", "db"),
        {
          [dateRef.current?.value]: {
            id: idValue.length + 1,
            date: dateRef.current?.value,
            normal1: ballNumber50,
            normal2: ballNumber2,
            sort1: copy1,
            sort2: copy2,
          },
        },
        { merge: true }
      );
      setBallNumber50([]);
      setBallNumber2([]);
    } else console.error(" błąd ");
  };
  return (
    <>
      <Window>
        <div className={db.selectedNumbers}>
          <span className={db.number50}>
            {ballNumber50.map((num) => (
              <Ball key={num} handleClick={() => handleClick50(num, true)}>
                {num}
              </Ball>
            ))}
          </span>
          <span className={`${db.signal} ${green(ballNumber50.length, 5)}`} />
          <span className={`${db.signal} ${green(ballNumber2.length, 2)}`} />
          <span className={db.number2}>
            {ballNumber2.map((num) => (
              <Ball key={num} handleClick={() => handleClick2(num, true)}>
                {num}
              </Ball>
            ))}
          </span>
        </div>
      </Window>
      {arrayGenerator(50).map((num) => (
        <Ball key={num} handleClick={() => handleClick50(num, false)}>
          {num}
        </Ball>
      ))}
      <hr />
      {arrayGenerator(12).map((num) => (
        <Ball key={num} handleClick={() => handleClick2(num, false)}>
          {num}
        </Ball>
      ))}
      <hr />
      <input type="date" ref={dateRef} className={db.date} />
      <BtnVariant name="ZAPISZ" handleClick={saveNumbersToFirestore} />
    </>
  );
}
