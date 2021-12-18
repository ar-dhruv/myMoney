import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firbase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firstoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
};
