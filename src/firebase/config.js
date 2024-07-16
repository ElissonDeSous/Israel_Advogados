import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5__2gcZeR4KnSp0SZenR96Z1a4azSVuY",
  authDomain: "israeladvogados-482ac.firebaseapp.com",
  projectId: "israeladvogados-482ac",
  storageBucket: "israeladvogados-482ac.appspot.com",
  messagingSenderId: "571772121616",
  appId: "1:571772121616:web:437ab8b71bb3f8b8731095"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}