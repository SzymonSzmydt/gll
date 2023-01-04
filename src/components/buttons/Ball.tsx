import btn from './buttons.module.css';
type BallProps = {
    children: React.ReactNode;
    handleClick?: ()=> void;
}
export function Ball( { children, handleClick }: BallProps ) {
    return <div className={btn.ball} onClick={handleClick}> { children } </div>
}