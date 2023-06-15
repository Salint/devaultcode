import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "./contexts/FirebaseAuthContext";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./style.css";

const App = () => {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<AuthProvider>
				<IfFirebaseAuthed>
					
				</IfFirebaseAuthed>
				<IfFirebaseUnAuthed>
					<Route exact path="/auth/signup" element={<Signup />} />
					<Route exact path="/auth/login" element={<Login />} />

					<Route path="*" element={<Navigate to="/auth/login" />}/>
				</IfFirebaseUnAuthed>
			</AuthProvider>
		)
	);

	return <RouterProvider router={router} />
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);