import btn from "./buttons.module.css";
type BtnVariantProps = {
  name: string;
  handleClick?: () => void;
  isActive?: boolean;
};
export function BtnVariant({ name, handleClick, isActive }: BtnVariantProps) {
  const active = isActive ? btn.active : "";
  return (
    <button className={`${btn.variant} ${active}`} onClick={handleClick}>
      {name}
    </button>
  );
}
