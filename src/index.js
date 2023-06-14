import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./style.css";

const App = () => {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route exact path="/auth/signup" element={<Signup />} />
				<Route exact path="/auth/login" element={<Login />} />
			</>
		)
	);

	return <RouterProvider router={router} />
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);