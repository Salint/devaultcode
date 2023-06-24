import React from "react";
import styled from "styled-components";

const Container = styled("div")`
	display: flex;
	align-items: center;
	cursor: pointer;
	height: 58px;
`;

const FlexItem = styled("div")`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: ${props => props.align};
`;
const Tag = styled("label")`
	background: var(--secondary);
	padding: 5px;
	border-radius: 5px;
	color: white;

	+ label {
		margin-left: 5px;
	}
`;

const ListHead = ({ order, title, tags, onClick }) => (
	<Container onClick={onClick}>
		<FlexItem align="flex-start">
			<h2>{order}. {title}</h2>
		</FlexItem>
		<FlexItem align="flex-end">
			{tags.map(tag => <Tag>{tag}</Tag>)}
		</FlexItem>
	</Container>
);

export default ListHead;