import React from "react";
import ListElement from "../molecules/ListElement";

const Lists = ({ lists }) => (
	<>
		{lists.map(list => <ListElement list={list} />)}
	</>
);

export default Lists;