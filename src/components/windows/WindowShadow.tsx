import styles from "./windows.module.css";

type WindowProps = {
    children: React.ReactNode;
}
export function WindowShadow({ children }: WindowProps) {
    return (
        <div className={`${styles.window} ${styles.shadow}`}>
            { children }
        </div>
    )
}