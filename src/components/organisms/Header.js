import { faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png";
import AuthService from "../../services/AuthService";
import Button from "../atoms/Button";

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

	return (
		<Container>
			<FlexItem align="flex-start">
				<Action onClick={async e => await authService.logOut()}><FontAwesomeIcon icon={faRightFromBracket} /></Action>
			</FlexItem>
			<FlexItem align="center">
				<Link to="/"><Img src={LogoSrc} /></Link>
			</FlexItem>
			<FlexItem align="flex-end">
				<Action onClick={async e => await authService.logOut()}><FontAwesomeIcon icon={faPlus} /></Action>
			</FlexItem>
		</Container>
	)
};

export default Header;