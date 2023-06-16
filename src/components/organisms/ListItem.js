import { useState } from "react";
import styled from "styled-components";
import ListHead from "../molecules/ListHead";

const Container = styled("li")`
	width: 100%;

	color: black;
	height: ${props => props.opened ? "initial" : "60px"};
	padding: 0 20px;
	overflow: hidden;
	background: var(--background-secondary);
	border-radius: 10px;
	border-bottom: 2px solid var(--border);

	+ li {
		margin-top: 20px;
	}
`;

const Description = styled("p")`
	font-size: 15px;
	color: gray;
	margin-bottom: 12px;
	i {
		color: darkgray;
	}
`;


const ListItem = ({ index, item }) => {
	
	const { title, tags, description, code } = item;

	const [ opened, setOpened ] = useState(false);

	return (
		<Container opened={opened} onClick={e => setOpened(!opened)}>
			<ListHead order={index + 1} title={title} tags={tags} />
			{ description ? <Description>{description}</Description> : <Description><i>Description not provided.</i></Description>}
		</Container>
	);
};

export default ListItem;