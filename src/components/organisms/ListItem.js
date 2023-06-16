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
const Code = styled("code")`
	background: #353535;
	color: white;
	white-space: pre-wrap;
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin-bottom: 20px;
	font-size: 15px;
	span + span {
		margin-top: 5px;
	}
`;


const ListItem = ({ index, item }) => {
	
	const { title, tags, description, code } = item;

	const [ opened, setOpened ] = useState(false);

	return (
		<Container opened={opened}>
			<ListHead onClick={e => setOpened(!opened)} order={index + 1} title={title} tags={tags} />
			{ description ? <Description>{description}</Description> : <Description><i>Description not provided.</i></Description>}
			{ code && <Code>{code.split("\\n").map(line => <span>{line}</span>)}</Code> }
		</Container>
	);
};

export default ListItem;