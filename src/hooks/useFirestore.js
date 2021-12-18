import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firbase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false); //STATE USED FOR CLEANUP FUNCTION...SET TRUE WHEN THE COMPONENT USE THIS HOOK UNMOUNTS

  //COLLECTION REFERENCE
  const ref = projectFirestore.collection(collection);

  // ADD DOCUMENT
  const addDocument = (doc) => {};

  // DELETE DOCUMENT
  const deleteDocument = (id) => {};

  //CLEAN-UP FUNCTION
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
