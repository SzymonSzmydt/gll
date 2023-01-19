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
  updateDbKeys,
} from "../../../context/redux/dbSlice";
import { dataBase } from "../../../context/firebase/firebase";
import { sortedOccured } from "../../../context/hooks/functions";
import {
  addDrawProperties,
  addLastDrawPropperties,
} from "../../../context/hooks/simple";

export function DataBase() {
  const [dbAdd, setDbAdd] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const dispatch = useDispatch();

  const uploadDataFromServer = async () => {
    const docRef = doc(dataBase, "jackpot", "db");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const db = Object.values(docSnap.data());
      const data50 = addLastDrawPropperties(
        addDrawProperties(sortedOccured(50, "normal1", db)),
        db.length
      );
      const data12 = addLastDrawPropperties(
        addDrawProperties(sortedOccured(12, "normal2", db)),
        db.length
      );
      dispatch(updateDb(db));
      dispatch(updateDbKeys(Object.keys(docSnap.data())));
      dispatch(updateDb50(data50));
      dispatch(updateDb12(data12));
    } else {
      console.log("No such document!");
    }
  };

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
