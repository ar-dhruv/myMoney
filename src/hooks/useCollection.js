import { useEffect, useState } from "react";
import { projectFirestore } from "../firbase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection); //THIS USEEFFECT WILL FIRE AS SOON AS THE COMPONENT USING THIS USECOLLECTION HOOK MOUNTS & HENCE FETCHING THE COLLECTION DATA FROM THE FIRESTORE

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id }); //WE ARE CREATING A NEW OBJECT FOR EACH DOCUMENT WE HAVE & PUSHING IN OUR RESULTS ARRAY
          //EACH DOCUMENT HAVE ALL ITS DATA AND A DOC ID
        });

        //UPDATE STATE
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );
    //A SNAPSHOT REPRESENTS THE COLLECTION AT THAT PARTICULAR TIME IT WAS TAKEN
    //THIS CALLBACK FUNCTION i.e THE FIRST ARGUMENT INT HE ONSNAPSHOT FUNCTION FIRES EVERYTIME THE FIRSTORE COLLECTION CHANGES AND SENDS BACK A SNAPSHOT
    //WE WILL USE THIS SNAPSHOT TO UPDATE OUR STATES
    //THE SECOND ARGUMENT OF THE ONSNAPSHOT FUNCTION IS A FUNCTION WHICH IS FIRED WHEN WE GET BACK AN ERROR
    //THIS IS HOW WE MAINTAIN A REALTIME LISTENING TO OUR DATABASE

    //UNSUBSCRIBE ON UNMOUNTING THE COMPONENT WHICH IS USING THIS HOOK
    return () => unsubscribe();
  }, [collection]);

  return { documents, error };
};
