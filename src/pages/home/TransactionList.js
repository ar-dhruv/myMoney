import { useFirestore } from "../../hooks/useFirestore";

//STYLES
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore("transactions");
  console.log(response);

  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>₹{transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}><i class="fas fa-trash"></i></button>
        </li>
      ))}
    </ul>
  );
}
