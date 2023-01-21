import btn from "./buttons.module.css";
type DeleteProps = {
  handleClick: () => void;
};
export function Save({ handleClick }: DeleteProps) {
  return <div className={btn.save} onClick={handleClick} />;
}
