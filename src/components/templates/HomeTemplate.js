import React from "react";
import styled from "styled-components";
import Lists from "../organisms/Lists";
import PageTemplate from "./PageTemplate";

const Container = styled("section")`
	margin-top: 50px;
	width: 500px;
	margin: 30px auto 0;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const Title = styled("h1")`
	font-size: 40px;
	border-bottom: 2px solid var(--secondary);
	padding-bottom: 10px;
	margin-bottom: 10px;
`;


const HomeTemplate = ({ pending, error, lists }) => {
	return (
		<PageTemplate>
			<Container>
				{ pending && <h1>Loading</h1> }
				{ (!pending && error) && <h1>Error has occured</h1> }
				{ (!pending && !error) && <>
					<Title>My lists</Title>
					<Lists lists={lists} />
				</>  }
			</Container>
		</PageTemplate>
	)
};

export default HomeTemplate;