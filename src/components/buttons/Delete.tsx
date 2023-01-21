import btn from "./buttons.module.css";
type DeleteProps = {
  handleClick: () => void;
};
export function Delete({ handleClick }: DeleteProps) {
  return <div className={btn.delete} onClick={handleClick} />;
}
