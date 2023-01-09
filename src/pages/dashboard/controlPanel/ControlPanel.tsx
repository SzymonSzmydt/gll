import { WindowShadow } from "../../../components/windows/WindowShadow";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { arrayGenerator } from '../../../context/hooks/functions';

export function ControlPanel() {
  const db = useSelector((state: RootState) => state.database.value);
  return (
    <WindowShadow>
      <Nav />
      <div>

      </div>
    </WindowShadow>
  );
}
