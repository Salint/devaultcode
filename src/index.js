import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import "./style.css";

const App = () => {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route exact path="/" element={<h1>Test</h1>} />
			</>
		)
	);

	return <RouterProvider router={router} />
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);