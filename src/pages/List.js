import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListTemplate from "../components/templates/ListTemplate";
import ListService from "../services/ListService";

const List = () => {

	const { id } = useParams();

	const listService = new ListService();

	const [ pending, setPending ] = useState(true);
	const [ error, setError ] = useState(false);
	const [ data, setData ] = useState();
	const [ exists, setExists ] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const doc = await listService.getList(id);

				if(doc.exists()) {
					setData(doc.data());
					setExists(true);
				}
			}
			catch(e) {
				alert(e.message);
				setError(true);
			}
			finally {
				setPending(false);
			}
		})();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if(!pending && !exists) {
		return <h1>List doesn't exist</h1>;
	}

	return <ListTemplate pending={pending} error={error} list={data}></ListTemplate>;
}

export default List;