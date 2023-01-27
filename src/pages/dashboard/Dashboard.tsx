import dash from "./styles.module.css";
import { DataBase } from "./dataBase/DataBase";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Generate } from "./controlPanel/generate/Generate";
import { Window } from "../../components/windows/Window";
import { Note } from "./Note.tsx/Note";
import { FindNumbers } from "./controlPanel/FindNumbers";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {
  updateDb,
  updateDb50,
  updateDb12,
  DataWithDraw,
} from "../../context/redux/dbSlice";
import { dataBase } from "../../context/firebase/firebase";
import { sortedOccured } from "../../context/hooks/functions";
import { useState } from "react";
import {
  addDrawProperties,
  addLastDrawPropperties,
} from "../../context/hooks/simple";

export function Dashboard() {
  const [data50, setData50] = useState<DataWithDraw[] | []>([]);

  const dispatch = useDispatch();

  const uploadDataFromServer = async () => {
    const docRef = doc(dataBase, "jackpot", "db");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const db = Object.values(docSnap.data());
      const sortOccured50 = sortedOccured(50, "normal1", db);
      const sortOccured12 = sortedOccured(12, "normal2", db);

      const addDrawPropert50 = addDrawProperties(sortOccured50);
      const addDrawPropert12 = addDrawProperties(sortOccured12);

      const data50 = addLastDrawPropperties(addDrawPropert50, db.length);
      const data12 = addLastDrawPropperties(addDrawPropert12, db.length);

      setData50(data50);

      dispatch(updateDb(db));
      dispatch(updateDb50(data50));
      dispatch(updateDb12(data12));
    } else {
      console.log("No such document!");
    }
  };

  return (
    <main className={dash.main}>
      <section>
        <DataBase uploadDataFromServer={uploadDataFromServer} />
        <Note />
        <FindNumbers data50={data50} />
      </section>
      <section>
        <ControlPanel data50={data50} />
        <Window shadow={true}>
          <Generate />
        </Window>
      </section>
    </main>
  );
}
