import React from "react";
import Header from "../molecules/Header";

const PageTemplate = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
};

export default PageTemplate;