import { useState } from "react";

//STYLES
import styles from "./Signup.module.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password , displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email} //CHANGING THE INPUT TEXT TO THE UPDATED STATE VALUE
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password} //CHANGING THE INPUT TEXT TO THE UPDATED STATE VALUE
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName} //CHANGING THE INPUT TEXT TO THE UPDATED STATE VALUE
        />
      </label>
      <button className="btn">Signup</button>
    </form>
  );
}
