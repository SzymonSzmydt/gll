import btn from "./buttons.module.css";
type SaveProps = {
  handleClick: () => void;
};
export function Save({ handleClick }: SaveProps) {
  return <div className={btn.save} onClick={handleClick} />;
}
