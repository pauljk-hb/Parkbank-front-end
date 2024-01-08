import { initializeApp  } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBdJ44O8u9YvVDhw4gJZjenKb52PDh_V4",
  authDomain: "park-bank-app.firebaseapp.com",
  projectId: "park-bank-app",
  storageBucket: "park-bank-app.appspot.com",
  messagingSenderId: "678823168030",
  appId: "1:678823168030:web:9f7da9355bd2587896460f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function getBenchData() {
    const querySnapshot = await getDocs(collection(db, "benches"));
    const userData = [];
    querySnapshot.forEach((doc) => {
        userData.push({ id: doc.id, ...doc.data() });
        console.log(doc.id, " => ", doc.data());
    });
    return userData;
}