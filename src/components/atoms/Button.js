import styled from "styled-components";

const Button = styled("button")`
	background: var(--primary);
	padding: 10px;
	color: white;
	border: none;
	font-size: 13px;
	cursor: pointer;
	border-radius: 5px;
	box-shadow: 0 0 0 #aaa;
	transition: box-shadow .1s;

	:hover {
		box-shadow: 3px 3px 10px #bbb;
	}
	
	
`;

export default Button;