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
    case "IS_PENDING":
      return { ...state, isPending: true };

    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false); //STATE USED FOR CLEANUP FUNCTION...SET TRUE WHEN THE COMPONENT USE THIS HOOK UNMOUNTS

  //COLLECTION REFERENCE
  const ref = projectFirestore.collection(collection);


  //ONLY DISPATCH IF THE COMPONENT IS STILL MOUNTED i.e ISCANCELLED IS FALSE
  const dispatchIFNotCancelled = (action) => {
    if(!isCancelled){
      dispatch(action)
    }
  }

  // ADD DOCUMENT
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });


    //TRING TO ADD A NEW DOCUMENT
    try{
      const addedDocument = await ref.add(doc)
      
    }
    catch(err){

    }
  };

  // DELETE DOCUMENT
  const deleteDocument = async (id) => {};

  //CLEAN-UP FUNCTION
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
