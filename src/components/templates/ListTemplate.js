import React from "react";
import styled from "styled-components";
import ListItem from "../organisms/ListItem";
import PageTemplate from "./PageTemplate";

const Container = styled("section")`
	width: 700px;
	margin: 20px auto 0;
	position: relative;
`;

const Title = styled("h1")`
	font-size: 40px;
	border-bottom: 2px solid var(--secondary);
	padding-bottom: 20px;
`;

const List = styled("ul")`
	position: relative;
	width: 100%;
	list-style-type: none;
	margin-top: 20px;
`;

const ListTemplate = () => {

	return (
		<PageTemplate>
			<Container>
				<Title>My cool list</Title>
				<List>
					<ListItem order={1} title="First Item" tags={["html", "css", "javascript"]} />
				</List>
			</Container>
		</PageTemplate>
	)
};

export default ListTemplate;