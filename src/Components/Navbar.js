import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

//STYLES
import styles from "./Navbar.module.css";
export default function Navbar() {
  const { logout } = useLogout(); //DESTRUCTURING THE LOGOUT FUNCTION FROM USELOGOUT HOOK

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
