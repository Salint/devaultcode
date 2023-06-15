import React from "react";
import Header from "../organisms/Header";

const PageTemplate = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
};

export default PageTemplate;