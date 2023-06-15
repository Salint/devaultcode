import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import app from "../../services/FirebaseService";
import ListService from "../../services/ListService";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Modal from "../molecules/Modal";

const P = styled("p")`
	font-size: 13px;
	color: #555;
	margin-bottom: 20px;
`;

const Label = styled("label")`
	color: #888;
`;
const InputField = styled(Input)`
	width: 100%;
	margin-top: 5px;
`;
const SubmitButton = styled(Button)`
	width: 100%;
	margin-top: 15px;
`;


const ErrorElement = styled("p")`
	color: red;	
`;


const NewListModal = ({ closeModal }) => {

	const auth = getAuth(app);
	const listService = new ListService();

	const [ pending, setPending ] = useState(false);
	const [ error, setError ] = useState("");
	const [ success, setSuccess ] = useState();
	const [ input, setInput ] = useState("");
	const [ listId, setListId ] = useState();

	const handleInput = (e) => {
		setInput(e.target.value);
	}

	const submit = async (e) => {
		e.preventDefault();

		setPending(true);
		setError("");

		try {
			if(input.length === 0) {
				
				throw new Error("Please enter a name");
			}
			else {
				setListId(await listService.createList(auth.currentUser.uid, input));

				closeModal();
				setSuccess(true);
			}
		}
		catch({ message }) {
			if(message && message.length > 0) {
				setError(message);
			}
			else {
				setError("Couldn't create the list");
			}
			setPending(false);
		}
	}

	return (
		<Modal title="Create a new list" width="450" closeModal={closeModal}>
			{ error.length > 0 && <ErrorElement>{error}</ErrorElement>}
			{ success && <Navigate to={"/lists/" + listId} />}
			<P>Enter the preferred name of your list (duplicate names are allowed)</P>
			<form onSubmit={e => submit(e)}>
				<Label htmlFor="listName">Name:</Label>
				<InputField 
					type="text"
					id="name" 
					name="name"
					autoComplete="new-password"
					placeholder="My really cool list"
					disabled={pending}
					onChange={e => handleInput(e)} 
				/>
				<SubmitButton
					type="submit"
					disabled={pending}
				>Create</SubmitButton>
			</form>
		</Modal>
	);
};

export default NewListModal;