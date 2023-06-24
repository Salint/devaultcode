import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import HomeTemplate from "../components/templates/HomeTemplate";
import app from "../services/FirebaseService";
import ListService from "../services/ListService";

const Home = () => {

	const listService = new ListService();

	const [ pending, setPending ] = useState(true);
	const [ error, setError ] = useState(false);
	const [ data, setData ] = useState();

	useEffect(() => {
		(async () => {
			try {
				setData(await listService.getLists(getAuth(app).currentUser.uid));

			}
			catch(e) {
				setError(true);
			}
			finally {
				setPending(false);
			}
		})();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<HomeTemplate pending={pending} error={error} lists={data}/>
	);
};

export default Home;