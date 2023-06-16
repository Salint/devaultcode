import app from "./FirebaseService";
import { addDoc, collection, doc, getDoc, getFirestore, serverTimestamp } from "firebase/firestore";

const firestore = getFirestore(app);

class ListService {
	
	async createList(uid, name) {
		const doc = await addDoc(collection(firestore, "lists"), {
			user: uid,
			name,
			createdAt: serverTimestamp(),
			modifiedAt: serverTimestamp()
		});

		return doc.id;
	}
	async getList(listid) {
		const result = await getDoc(doc(firestore, "lists", listid));
		
		return result;
	}
}

export default ListService;