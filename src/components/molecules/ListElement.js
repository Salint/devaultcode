import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListLink = styled(Link)`
	width: 100%;
	background: var(--primary);
	display: flex;
	color: white;
	text-decoration: none;
	padding: 15px 20px;
	border-radius: 10px;
	border-bottom: 3px solid var(--secondary);

	+ a {
		margin-top: 10px;
	}
`;
const FlexItem = styled("div")`
	flex: 1;
	display: flex;
	justify-content: ${props => props.align};
`;
const Title = styled("h2")`
	font-size: 15px;
`;
const Date = styled("p")`
	opacity: 0.5;
`;

const ListElement = ({ list }) => {
	return (
		<ListLink to={"/lists/" + list.id}>
			<FlexItem align="flex-start">
				<Title>{list.get("name")}</Title>
			</FlexItem>
			<FlexItem align="flex-end">	
				<Date>Created: {list.get("createdAt").toDate().toLocaleString()}</Date>
			</FlexItem>
		</ListLink>
	);
};

export default ListElement