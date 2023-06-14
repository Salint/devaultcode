import React from "react";
import styled from "styled-components";
import SignupForm from "../components/organisms/SignupForm";

import LogoSrc from "../assets/logo.png";
import BackgroundSrc from "../assets/signup-bg.png";

const Container = styled("div")`
	display: flex;
	height: 100vh;
`;
const Logo = styled("img")`
	width: 60px;
	margin-top: 40px;
	margin-bottom: 20px;
`;
const AuthArea = styled("section")`
	flex: 1;
	text-align: center;
	position: relative;
`;
const Image = styled("section")`
	flex: 2;
	background: url(${BackgroundSrc}) center no-repeat;
	background-size: cover;	

	@media (max-width: 900px) {
		display: none;
	}
`;

const Copyright = styled("p")`
	color: #aaa;
	position: absolute;
	left: 50%;
	bottom: 40px;
	transform: translate(-50%, 0);
	
	@media (max-height: 600px) {
		position: initial;
		transform: translate(0, 0);
		padding-bottom: 20px;
	}
`;

const Signup = () => (
	<Container>
		<AuthArea>
			<Logo src={LogoSrc} />
			<SignupForm />
			<Copyright>(c) Salint {new Date().getFullYear()}. All Rights Reserved.</Copyright>
		</AuthArea>
		<Image />
	</Container>
);

export default Signup;