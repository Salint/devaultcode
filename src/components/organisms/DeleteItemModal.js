import React, { useState } from "react";
import styled from "styled-components";
import ListService from "../../services/ListService";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";

const P = styled("p")`
	font-size: 13px;
	color: #555;
`;
const SubmitButton = styled(Button)`
	width: 100%;
	margin-top: 15px;
`;


const ErrorElement = styled("p")`
	color: red;	
`;


const DeleteItemModal = ({ listid, index, title, closeModal }) => {

	const listService = new ListService();

	const [ pending, setPending ] = useState(false);
	const [ error, setError ] = useState("");

	const submit = async (e) => {
		e.preventDefault();

		setPending(true);
		setError("");

		try {
			await listService.deleteListItem(listid, index);

			closeModal();
		}
		catch({ message }) {
			setError("Couldn't delete list item");
			setPending(false);
		}
	}

	return (
		<Modal title={"Delete \"" + title + "\"?"} width="450" closeModal={closeModal}>
			{ error.length > 0 && <ErrorElement>{error}</ErrorElement>}
			<P>This will delete the item alongside the code snippet associated with it. This action can not be undone.</P>
			<form onSubmit={e => submit(e)}>
				<SubmitButton
					type="submit"
					disabled={pending}
				>Delete</SubmitButton>
			</form>
		</Modal>
	);
};

export default DeleteItemModal;