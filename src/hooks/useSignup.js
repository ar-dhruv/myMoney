import { useState } from "react";
import { projectAuth } from "../firbase/config";

export const useSignup = () => {
  //STATES FOR ERROR AND PENDING
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

      //THIS ERROR IS THROWN BY US IN CASES WE DONT GET BACK THE RES BACK eg. BAD NETWORK
      if (!res) {
        throw new Error("Could not complete signup");
      }

      //ADD DISPLAY NAME TO THE USER IN FIREBASE
      await res.user.updateProfile({ displayName: displayName });

      setIsPending(false);
      setError(null);
    } catch (err) {
      //IF THERE IS ERROR SIGNING UP THE USER UPDATE THE SETERROR AND SET
      //ISPENDING STATE TO BE FALSE
      //THIS ERROR WILL BE THROWN BY FIRESTORE...eg. PASSWORD TOO SHORT/EMAIL ALREADY TAKEN
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
