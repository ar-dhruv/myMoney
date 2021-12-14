import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

//STYLES
import styles from "./Signup.module.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
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
      
      {/* WHEN THE ISPENDING IS TRUE THEN WE SHOW A LOADING & DISABLED BUTTON*/}
      {/* AND WHEN ISPENDING IS FALSE THEN WE JUST SHOW THE SIGNUP BUTTON TO SUBMIT THE FORM VALUES */}
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
