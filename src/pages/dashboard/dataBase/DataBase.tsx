import db from "./db.module.css";
import { useState } from "react";
import { DbAddRecord } from "./records/DbAddRecord";
import { DbView } from "./records/DbView";
import { Window } from "../../../components/windows/Window";
import { BtnVariant } from "../../../components/buttons/BtnVariant";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {
  updateDb,
  updateDb50,
  updateDb12,
} from "../../../context/redux/dbSlice";
import { dataBase } from "../../../context/firebase/firebase";
import { sortedOccured } from "../../../context/hooks/functions";
import { addDrawProperties } from "../../../context/hooks/simple";

export function DataBase() {
  const [dbAdd, setDbAdd] = useState(false);
  const dispatch = useDispatch();

  const uploadDataFromServer = async () => {
    const docRef = doc(dataBase, "jackpot", "db");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const db = Object.values(docSnap.data());
      const data50 = addDrawProperties(sortedOccured(50, "normal1", db));
      const data12 = addDrawProperties(sortedOccured(12, "normal2", db));
      dispatch(updateDb(db));
      dispatch(updateDb50(data50));
      dispatch(updateDb12(data12));
    } else {
      console.log("No such document!");
    }
  };

  return (
    <Window shadow={true}>
      <BtnVariant
        name={dbAdd ? "BAZA RECORDÓW" : "DODAJ RECORD"}
        handleClick={() => setDbAdd(!dbAdd)}
      />
      <BtnVariant name={"ODŚWIEŻ"} handleClick={uploadDataFromServer} />
      <section className={db.section}>
        {dbAdd ? <DbAddRecord /> : <DbView />}
      </section>
    </Window>
  );
}
