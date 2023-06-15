import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../services/AuthService";
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


const ErrorElement = styled("p")`
	color: red;	
`;

const SignupForm = () => {

	const authService = new AuthService();

	const [ pending, setPending ] = useState(false);
	const [ error, setError ] = useState("");
	const [ success, setSuccess ] = useState(false);
	const [ input, setInput ] = useState({
		email: "",
		password: "",
		repeatPassword: ""
	});
	
	const handleInput = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const submit = async (e) => {
		e.preventDefault();

		setPending(true);
		setError("");

		try {
			if(input.email.length === 0 ||
			input.password.length === 0 ||
			input.repeatPassword.length === 0) {
				
				throw new Error("Please fill all input fields");
			}
			else if(input.password !== input.repeatPassword) {
				throw new Error("Passwords don't match");
			}
			else {
				await authService.signUp(input.email, input.password);

				setSuccess(true);
				alert("success");
			}
		}
		catch({ message, code }) {
			if(code) {
				if(code === "auth/email-already-in-use") {
					setError("E-mail is already in use");
				}
				else if(code === "auth/invalid-email") {
					setError("Invalid E-mail provided");
				}
				else if(code === "auth/weak-password") {
					setError("Your password is too weak");
				}
				else {
					setError("An unknown error has occured");
				}
			}
			else {
				setError(message);
			}
			setPending(false);
		}
	}

	return (
		<Form onSubmit={e => submit(e)}>
			<Title>Create an Account</Title>
			{ error.length > 0 && <ErrorElement>{error}</ErrorElement>}
			<Field>
				<Label htmlFor="email">E-mail:</Label>
				<InputField 
					type="email"
					id="email" 
					name="email"
					autocomplete="off"
					placeholder="johnsmith@hotmail.com" 
					disabled={pending}
					onChange={e => handleInput(e)}
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
					disabled={pending}
					onChange={e => handleInput(e)}
				/>
			</Field>
			<Field>
				<Label htmlFor="repeat_password">Repeat Password:</Label>
				<InputField 
					type="password"
					id="repeat_password" 
					name="repeatPassword"
					autocomplete="off"
					placeholder="••••••••••••" 
					disabled={pending}
					onChange={e => handleInput(e)}
				/>
			</Field>
			<Buttons>
				<SubmitButton
					type="submit"
					disabled={pending}
				>Sign Up</SubmitButton>
				<A to="/auth/login">Login</A>
			</Buttons>
		</Form>
	);
};

export default SignupForm;