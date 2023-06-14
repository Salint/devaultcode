import app from "./FirebaseService";
import { getAuth, 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	sendEmailVerification } from "firebase/auth";

const auth = getAuth(app);

class AuthService {
	
	async signUp(email, password) {
		const user = await createUserWithEmailAndPassword(auth, email, password);

		await sendEmailVerification(user.user);
	}
	async logIn(email, password) {

		await signInWithEmailAndPassword(auth, email, password);
	}

}

export default AuthService;