import React from "react";
import { useParams } from "react-router-dom";
import ListTemplate from "../components/templates/ListTemplate";

const List = () => {
	const { id } = useParams();

	return <ListTemplate></ListTemplate>;
}

export default List;