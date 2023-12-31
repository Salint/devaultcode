import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import ListItem from "../organisms/ListItem";
import NewItemModal from "../organisms/NewItemModal";
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
	margin-bottom: 10px;
`;

const List = styled("ul")`
	position: relative;
	width: 100%;
	list-style-type: none;
	margin-top: 20px;
`;

const ListTemplate = ({ id, list, pending, error }) => {

	const [ modalOpened, setModalOpened ] = useState(false);

	return (
		<PageTemplate>
			{ pending && <h1>Loading</h1> }
			{ (!pending && error) && <h1>Error has occured</h1> }
			{ (!pending && !error) && 
				<Container>
					{modalOpened && <NewItemModal closeModal={() => setModalOpened(false)} id={id} />}
					<Header>
						<Title>{list.name}</Title>
						<P>Last Modified on {list.modifiedAt.toDate().toLocaleString()}</P>
						<Button onClick={e => setModalOpened(true)}><FontAwesomeIcon icon={faPlus} /> Add Item</Button>
					</Header>
					<List>
						{list.items && list.items.map((item, index) => <ListItem index={index} item={item} listid={id} />)}
					</List>
				</Container> 
			}
		</PageTemplate>
	)
};

export default ListTemplate;