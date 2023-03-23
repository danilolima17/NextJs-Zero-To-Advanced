import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr3tROuaXePBWcENKI6myZRaOxJW_nh0E",
  authDomain: "tarefasplus-d1aa0.firebaseapp.com",
  projectId: "tarefasplus-d1aa0",
  storageBucket: "tarefasplus-d1aa0.appspot.com",
  messagingSenderId: "769213693019",
  appId: "1:769213693019:web:d9ad137817b38a4f1ad37e",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
