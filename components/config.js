/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATmk9lDf2ZJ5kOO4Nt7W4ZkDuGCfbYSSw",
  authDomain: "pilot-2067d.firebaseapp.com",
  projectId: "pilot-2067d",
  storageBucket: "pilot-2067d.appspot.com",
  messagingSenderId: "626074760511",
  appId: "1:626074760511:web:c9026ecb712206e9088f8a",
  measurementId: "G-5EBBTPKFY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const AddHospitals = async () => {
  try {
    const docRef = await addDoc(collection(db, "hospitals"), {
      name: "Devkamal Hospital",
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const GetDoctorsByHospital = async (id) => {
  try {
    const querysnapshots = await getDocs(
      collection(db, "hospitals", id, "doctors")
    );
    console.log(querysnapshots.docs[0].data());
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const GethospitalData = async (id) => {
  try {
    const querysnapshots = await getDocs(collection(db, "hospitals"), id);
    console.log(querysnapshots.docs[0].data());
    return querysnapshots.docs[0].data("name");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
const exportItems = {
  AddHospitals,
  GetDoctorsByHospital,
  GethospitalData,
};

export default exportItems;
