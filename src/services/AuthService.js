import app from "./FirebaseService";
import { getAuth, 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	sendEmailVerification, 
	signOut
} from "firebase/auth";

const auth = getAuth(app);

class AuthService {
	
	async signUp(email, password) {
		const user = await createUserWithEmailAndPassword(auth, email, password);

		await sendEmailVerification(user.user);
	}
	async logIn(email, password) {

		await signInWithEmailAndPassword(auth, email, password);
	}
	async logOut() {
		await signOut(auth);
	}

}

export default AuthService;