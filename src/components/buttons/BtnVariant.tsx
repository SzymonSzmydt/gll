import btn from './buttons.module.css';
type BtnVariantProps = {
    name: string;
    handleClick: ()=> void;
}
export function BtnVariant({ name, handleClick }: BtnVariantProps ) {
    return <button className={btn.variant} onClick={handleClick}> { name } </button>
}