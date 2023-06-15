import { faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png";
import AuthService from "../../services/AuthService";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";

const Container = styled("header")`
	width: 600px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	height: 60px;

	@media (max-width: 700px) {
		width: 90%;
	}
`;

const FlexItem = styled("div")`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: ${props => props.align};
`;

const Img = styled("img")`
	width: 40px;
`;

const Action = styled(Button)`
	border-radius: 50%;
	font-size: 15px;
	height: 40px;
	width: 40px;
`;

const Header = () => {

	const authService = new AuthService();

	const [ modalOpened, setModalOpened ] = useState(false);

	return (
		<Container>
			{modalOpened && <Modal title="Create a new list" width="500" height="250" closeModal={() => setModalOpened(false)}/>}
			<FlexItem align="flex-start">
				<Action onClick={async e => await authService.logOut()}><FontAwesomeIcon icon={faRightFromBracket} /></Action>
			</FlexItem>
			<FlexItem align="center">
				<Link to="/"><Img src={LogoSrc} /></Link>
			</FlexItem>
			<FlexItem align="flex-end">
				<Action onClick={e => setModalOpened(!modalOpened)}><FontAwesomeIcon icon={faPlus} /></Action>
			</FlexItem>
		</Container>
	)
};

export default Header;