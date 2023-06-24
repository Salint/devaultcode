import app from "./FirebaseService";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore";

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
	async createListItem(id, title, description, tags) {
		
		let items = [];
		const list = await this.getList(id);
	
		items = list.data().items ? list.data().items : [];
		items.push({
			title,
			description,
			tags: tags.toString().split(",")
		});

		await updateDoc(doc(firestore, "lists", id), {
			items,
			modifiedAt: serverTimestamp()
		});
	}
	async getList(listid) {
		const result = await getDoc(doc(firestore, "lists", listid));
		
		return result;
	}
	async listenToList(listid, setData) {
		onSnapshot(doc(firestore, "lists", listid), (doc) => {
			if(!doc.metadata.hasPendingWrites) setData(doc.data());
		});
		
	}
	async getLists(uid) {
		const result = await getDocs(query(collection(firestore, "lists"), where("user", "==", uid), orderBy("createdAt")));
		
		return result.docs;
	}

	async deleteListItem(listid, index) {
		let items = [];
		const list = await this.getList(listid);
	
		items = list.data().items ? list.data().items : [];
		items.splice(index);

		await updateDoc(doc(firestore, "lists", listid), {
			items,
			modifiedAt: serverTimestamp()
		});
	}
}

export default ListService;