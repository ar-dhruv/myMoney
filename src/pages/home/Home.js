//STYLES
import styles from "./Home.module.css";

//COMPONENTS
import TransactionForm from "./TransactionForm";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transactiion List</div>
      <div className={styles.sidebar}>
          <TransactionForm/>
      </div>
    </div>
  );
}
