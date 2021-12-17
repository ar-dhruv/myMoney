import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }; //WHEN WE DISPATCH A LOGIN ACTION WE RETURN A NEW STATE IN A FORM OF OBJECT WITH CURRENT STATE PROPERTIES SPREADED AND UPDATING THE USER TO ACTION'S PAYLOAD

    case "LOGOUT":
      return { ...state, user: null }; //WHEN WE DISPATCH THE LOGOUT ACTION THE WE SET THE CURRENT STATE PROPERTIES WITH THE UPDATED USER TO BE NULL

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};