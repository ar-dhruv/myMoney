import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//STYLES
import styles from "./Navbar.module.css";
export default function Navbar() {
  const { logout } = useLogout(); //DESTRUCTURING THE LOGOUT FUNCTION FROM USELOGOUT HOOK
  const { user } = useAuthContext(); //DESTRUCTURING THE USER PROPERTY FROM USEAUTHCONTEXT HOOK

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        {/* IF WE DONT HAVE A USER THEN ONLY WE SHOW THE LOGIN & SIGNUP LINKS*/}
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {/* IF WE USER IF ALREADY IN THE STATE THEN WE WILL ONLY SHOW THE LOGOUT BITTON */}
        {user && (
          <>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
