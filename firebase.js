import * as dotenv from 'dotenv';
dotenv.config()
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {

    apiKey: process.env.API_KEY,
  
    authDomain: process.env.AUTH_DOMAIN,
  
    projectId: process.env.PROJECT_ID,
  
    storageBucket: process.env.STORAGE_BUCKET,
  
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
  
    appId: process.env.APP_ID
  
  };

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function units(db) {
    const unitsCollection = collection(db, 'unidades');
    const unitsSnapshot = await getDocs(unitsCollection)
    const listofUnits = unitsSnapshot.docs.map(unit => unit.data().name)
    console.log(listofUnits);
    return listofUnits
}
  
units(db)