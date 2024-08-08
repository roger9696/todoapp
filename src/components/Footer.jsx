import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div>
      <h1 className={styles.footer}>
        <span className={styles.item}>Completed Todos: {completedTodos}</span>
        <span>Total Todos: {totalTodos}</span>
      </h1>
    </div>
  );
}
