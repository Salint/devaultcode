import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const Form = styled("form")`
	border-radius: 20px;
	width: 350px;
	padding: 30px;
	text-align: center;
	margin: 0 auto;

	@media (max-width: 700px) {
		width: 90%;
	}
`;
const Title = styled("h1")`
	font-size: 25px;
	margin-bottom: 20px;
`;
const Field = styled("div")`
	width: 100%;
	text-align: left;

	+ div {
		margin-top: 20px;
	}
`;
const Label = styled("label")`
	color: #888;
`;
const InputField = styled(Input)`
	width: 100%;
	margin-top: 5px;
`;
const Buttons = styled("section")`
	display: flex;
	margin-top: 20px;
`;
const SubmitButton = styled(Button)`
	flex: 1;
`;
const A = styled(Link)`
	flex: 1;
	background: var(--background-secondary);
	border: 2px solid var(--border);
	text-align: center;
	text-decoration: none;
	margin-left: 10px;
	color: black;
	font-size: 13px;
	display: flex;
	justify-content: center;
	border-radius: 5px;
	align-items: center;
	padding: 10px;
`;

const SignupForm = () => {

	return (
		<Form>
			<Title>Create an Account</Title>
			<Field>
				<Label htmlFor="email">E-mail:</Label>
				<InputField 
					type="email"
					id="email" 
					name="email"
					autocomplete="off"
					placeholder="johnsmith@hotmail.com" 
				/>
			</Field>
			<Field>
				<Label htmlFor="password">Password:</Label>
				<InputField 
					type="password"
					id="password" 
					name="password"
					autocomplete="off"
					placeholder="••••••••••••" 
				/>
			</Field>
			<Field>
				<Label htmlFor="repeat_password">Repeat Password:</Label>
				<InputField 
					type="password"
					id="repeat_password" 
					name="repeat_password"
					autocomplete="off"
					placeholder="••••••••••••" 
				/>
			</Field>
			<Buttons>
				<SubmitButton>Sign Up</SubmitButton>
				<A to="/auth/login">Login</A>
			</Buttons>
		</Form>
	);
};

export default SignupForm;