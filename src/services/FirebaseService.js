import { initializeApp } from "firebase/app";

// Modules
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDiLRdCro8GhtHPj3eNIENRG8BB4AUXZY8",
	authDomain: "listbitch.firebaseapp.com",
	projectId: "listbitch",
	storageBucket: "listbitch.appspot.com",
	messagingSenderId: "642816272331",
	appId: "1:642816272331:web:4b787dedcd49258ddc384e",
	measurementId: "G-T7GCYJESZ1"
};
  
const app = initializeApp(firebaseConfig);

// Connecting emulator for local testing.
if(window.location.hostname === "localhost") {
	connectAuthEmulator(getAuth(app), "http://localhost:9099");
	connectFirestoreEmulator(getFirestore(app), "localhost", 8080);
}


export default app;