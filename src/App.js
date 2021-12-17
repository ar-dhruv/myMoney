import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//PAGES & COMPONENTS
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./Components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {/* IF USER IS NOT LOGGED IN AND IT CLICKS THE HOME ROUTE THEN IT IS REDIRECTED TO THE LOGIN PAGE ELSE TO THE HOME PAGE */}
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {/* IF USER IS ALREADY LOGGED IN AND IT CLICKS THE LOGIN ROUTE THEN IT IS REDIRECTED TO THE HOME PAGE ELSE TO THE LOGIN PAGE */}
              {user && <Redirect to="/" />}
              {!user && <Login />}
             </Route>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
