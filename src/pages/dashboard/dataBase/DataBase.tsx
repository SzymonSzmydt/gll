import db from "./db.module.css";
import { useState } from "react";
import { DbAddRecord } from "./records/DbAddRecord";
import { DbView } from "./records/DbView";
import { Window } from "../../../components/windows/Window";
import { BtnVariant } from "../../../components/buttons/BtnVariant";

type DataBaseProps = {
  uploadDataFromServer: ()=> void;
};

export function DataBase({ uploadDataFromServer }: DataBaseProps) {
  const [dbAdd, setDbAdd] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  return (
    <Window shadow={true}>
      <div className={db.box}>
        <BtnVariant
          name={dbAdd ? "BAZA RECORDÓW" : "DODAJ RECORD"}
          handleClick={() => setDbAdd(!dbAdd)}
        />
        <BtnVariant name={"ODŚWIEŻ"} handleClick={uploadDataFromServer} />
        <img
          src={require("../../../assets/sort.png")}
          alt="sortuj"
          className={db.img}
          onClick={() => setIsSorted(!isSorted)}
        />
      </div>
      <section className={db.section}>
        {dbAdd ? <DbAddRecord /> : <DbView isSorted={isSorted} />}
      </section>
    </Window>
  );
}
