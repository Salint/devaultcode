import React from "react";
import styled from "styled-components";

const Container = styled("div")`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`;

const Background = styled("div")`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: black;
	opacity: 0.3;
`;

const Window = styled("section")`
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 50%;
	width: ${props => props.width + "px"};
	height ${props => props.height + "px"};
	transform: translate(-50%, -50%);
	background: var(--background-primary);
	border-radius: 10px;
	box-shadow: 7px 7px 20px #999;
	border: 1px solid var(--border);
	overflow: hidden;
`;

const TitleBar = styled("div") `
	width: 100%;
	background: var(--background-secondary);
	border-bottom: 1px solid var(--border);
	display: flex;
	align-items: center;
	padding: 10px;
`;
const FlexItem = styled("div")`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: ${props => props.align};
`;
const Title = styled("h1")`
	font-size: 16px;
	margin-left: 10px;
`;
const Button = styled("button")`
	border: none;
	background: var(--background-primary);
	color: black;
	border: 1px solid var(--border);
	font-size: 13px;
	cursor: pointer;
	padding: 7px 10px;
	border-radius: 50%;
`;

const Content = styled("div")`
	padding: 15px;
`;

const Modal = ({ closeModal, width, height, title, children }) => {

	return (
		<Container>
			<Background onClick={e => closeModal()}/>
			<Window width={width} height={height}>
				<TitleBar>
					<FlexItem align="flex-start">
						<Title>{title}</Title>
					</FlexItem>
					<FlexItem align="flex-end">
						<Button onClick={e => closeModal()}>X</Button>
					</FlexItem>
				</TitleBar>
				<Content>{children}</Content>
			</Window>
		</Container>
	);
}

export default Modal;