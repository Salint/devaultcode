import React, { useState } from "react";
import styled from "styled-components";
import ListService from "../../services/ListService";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Modal from "../molecules/Modal";

const Field = styled("div")`
	+ div {
		margin-top: 10px;
	}
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


const NewItemModal = ({ closeModal, id }) => {

	const listService = new ListService();

	const [ pending, setPending ] = useState(false);
	const [ error, setError ] = useState("");
	const [ input, setInput ] = useState({
		title: "",
		description: "",
		tag: ""
	});

	const handleInput = (e) => {
		setInput({
			...input,
			[e.target.name]: [e.target.value]
		});
	}

	const submit = async (e) => {
		e.preventDefault();

		setPending(true);
		setError("");

		try {
			if(input.title.length === 0 || 
			input.description.length === 0 ||
			input.tag.length === 0) {
				
				throw new Error("Please fill out the fields");
			}
			else {
				await listService.createListItem(id, input.title, input.description, input.tag);

				closeModal();
			}
		}
		catch({ message }) {
			if(message && message.length > 0) {
				setError(message);
			}
			else {
				setError("Couldn't create the list item");
			}
			setPending(false);
		}
	}

	return (
		<Modal title="Create a new list item" width="450" closeModal={closeModal}>
			{ error.length > 0 && <ErrorElement>{error}</ErrorElement>}
			<form onSubmit={e => submit(e)}>
				<Field>
					<Label htmlFor="title">Title:</Label>
					<InputField 
						type="text"
						id="title" 
						name="title"
						autoComplete="new-password"
						placeholder="Do something"
						disabled={pending}
						onChange={e => handleInput(e)} 
					/>
				</Field>
				<Field>
					<Label htmlFor="description">Description:</Label>
					<InputField 
						type="text"
						id="description" 
						name="description"
						autoComplete="new-password"
						placeholder="Do something productive to improve your life"
						disabled={pending}
						onChange={e => handleInput(e)} 
					/>
				</Field>
				<Field>
					<Label htmlFor="tag">Tags(split by commas):</Label>
					<InputField 
						type="text"
						id="tag" 
						name="tag"
						autoComplete="new-password"
						placeholder="HTML, CSS"
						disabled={pending}
						onChange={e => handleInput(e)} 
					/>
				</Field>
				<SubmitButton
					type="submit"
					disabled={pending}
				>Create</SubmitButton>
			</form>
		</Modal>
	);
};

export default NewItemModal;