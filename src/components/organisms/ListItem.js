import { useState } from "react";
import styled from "styled-components";
import ListHead from "../molecules/ListHead";

const Container = styled("li")`
	width: 100%;

	color: black;
	height: ${props => props.opened ? "200px" : "60px"};
	padding: 0 20px;
	transition: height .5s;
	overflow: hidden;
	border-bottom: 1px solid var(--border);

	+ li {
		margin-top: 20px;
	}
`;


const ListItem = ({ order, title, tags, description, code }) => {
	
	const [ opened, setOpened ] = useState(false);

	return (
		<Container opened={opened} onClick={e => setOpened(!opened)}>
			<ListHead order={order} title={title} tags={tags} />
		</Container>
	);
};

export default ListItem;