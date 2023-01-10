import db from "./db.module.css";
import { useState, useEffect, useCallback } from "react";
import { DbAddRecord } from "./records/DbAddRecord";
import { DbView } from "./records/DbView";
import { Window } from "../../../components/windows/Window";
import { BtnVariant } from "../../../components/buttons/BtnVariant";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { updateDb } from "../../../context/redux/dbSlice";
import { dataBase } from "../../../context/firebase/firebase";

export function DataBase() {
  const [dbAdd, setDbAdd] = useState(false);
  const dispatch = useDispatch();

  const uploadDataFromServer = useCallback(async () => {
    const docRef = doc(dataBase, "jackpot", "db");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(updateDb(Object.values(docSnap.data())));
    } else {
      console.log("No such document!");
    }
  }, [dispatch]);

  useEffect(() => {
    uploadDataFromServer();
  }, [uploadDataFromServer, dbAdd]);

  return (
    <Window shadow={true}>
      <BtnVariant
        name={dbAdd ? "BAZA RECORDÓW" : "DODAJ RECORD"}
        handleClick={() => setDbAdd(!dbAdd)}
      />
      <section className={db.section}>
        {dbAdd ? <DbAddRecord /> : <DbView />}
      </section>
    </Window>
  );
}
