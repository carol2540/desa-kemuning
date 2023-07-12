import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import moment from "moment"

const firebaseConfig = {
  apiKey: "AIzaSyBkBs0dYSrZkmqnv1_m3eQEIZAPRXKCKb8",
  authDomain: "desa-kemuning.firebaseapp.com",
  databaseURL: "https://desa-kemuning-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "desa-kemuning",
  storageBucket: "desa-kemuning.appspot.com",
  messagingSenderId: "948937100845",
  appId: "1:948937100845:web:8eb207ea59bf6dc0a532a4",
  measurementId: "G-9E9NQ9EJ4B"
}

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// }
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'news'));
    const tableData = querySnapshot.docs.map((doc) => {
        const timestamp = doc.data().date 
        const date = timestamp.toDate() 
        const formattedDate = moment(date).format('YYYY-MM-DD')
        return {
            id: doc.id,
            title: doc.data().title,
            date: formattedDate,
            location: doc.data().location,
            desc: doc.data().desc,
            image: doc.data().image,
            mainNews: doc.data().mainNews,
            subNews: doc.data().subNews
        }
        // Add more fields if needed
      });
      return tableData;
  } catch (error) {
    console.error('Error fetching Firestore table:', error);
  }
};

const fetchProduct = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const tableData = querySnapshot.docs.map((doc) => {
        const timestamp = doc.data().date 
        const date = timestamp.toDate() 
        const formattedDate = moment(date).format('YYYY-MM-DD')
        return {
            id: doc.id,
            name: doc.data().name,
            date: formattedDate,
            price: doc.data().price,
            image: doc.data().image,
            contact: doc.data().contact,

        }
        // Add more fields if needed
      });
      return tableData;
  } catch (error) {
    console.error('Error fetching Firestore table:', error);
  }
};

export {  db, auth, fetchData, fetchProduct }