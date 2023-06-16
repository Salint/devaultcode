import React from "react";
import styled from "styled-components";
import ListItem from "../organisms/ListItem";
import PageTemplate from "./PageTemplate";

const Container = styled("section")`
	width: 700px;
	margin: 20px auto 0;
	position: relative;
`;

const Header = styled("section")`
	border-bottom: 2px solid var(--secondary);
	padding-bottom: 10px;
`;

const Title = styled("h1")`
	font-size: 40px;
`;

const P = styled("p")`
	color: gray;
	margin-top: 15px;
`;

const List = styled("ul")`
	position: relative;
	width: 100%;
	list-style-type: none;
	margin-top: 20px;
`;

const ListTemplate = ({ list, pending, error }) => {

	return (
		<PageTemplate>
			{ pending && <h1>Loading</h1> }
			{ (!pending && error) && <h1>Error has occured</h1> }
			{ (!pending && !error) && 
				<Container>
					<Header>
						<Title>{list.name}</Title>
						<P>Last Modified on {list.modifiedAt.toDate().toLocaleString()}</P>
					</Header>
					<List>
						{list.items.map((item, index) => <ListItem index={index} item={item} />)}
					</List>
				</Container> 
			}
		</PageTemplate>
	)
};

export default ListTemplate;