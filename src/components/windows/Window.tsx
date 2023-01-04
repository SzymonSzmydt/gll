import styles from "./windows.module.css";

type WindowProps = {
    children: React.ReactNode;
}
export function Window({ children }: WindowProps) {
    return (
        <div className={styles.window}>
            { children }
        </div>
    )
}