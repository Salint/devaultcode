import React from "react";
import styled from "styled-components";
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

const NewListModal = ({ closeModal }) => {

	return (
		<Modal title="Create a new list" width="450" height="225" closeModal={closeModal}>
			<P>Enter the preferred name of your list (duplicate names are allowed)</P>
			<form>
				<Label htmlFor="listName">Name:</Label>
				<InputField 
					type="text"
					id="name" 
					name="name"
					autoComplete="new-password"
					placeholder="My really cool list" 
				/>
				<SubmitButton>Create</SubmitButton>
			</form>
		</Modal>
	);
};

export default NewListModal;