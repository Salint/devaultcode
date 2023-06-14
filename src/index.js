import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Signup from "./pages/Signup";

import "./style.css";

const App = () => {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route exact path="/" element={<Signup />} />
			</>
		)
	);

	return <RouterProvider router={router} />
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);