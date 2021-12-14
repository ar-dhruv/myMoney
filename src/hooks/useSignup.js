import { useState } from "react";
import { projectAuth } from "../firbase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null); //WE RESET THE ERROR TO BE NULL EVERYTIME WE TRY TO SIGNUP
    setIsPending(true);

    try {
      //TRY TO SIGNUP THE USER
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      //ADD DISPLAY NAME TO THE USER IN FIREBASE
      await res.user.updateProfile({displayName:displayName})

      setIsPending(false);
      setError(null);

    } catch (err) {
      //IF THERE IS ERROR SIGNING UP THE USER UPDATE THE SETERROR AND SET
      //ISPENDING STATE TO BE FALSE
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  export { error, isPending, signup };
};
