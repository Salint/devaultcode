import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "./contexts/FirebaseAuthContext";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./style.css";

const App = () => {

	const router = createBrowserRouter([{
		children: [
			{
				path: "/auth/signup",
				element: (
					<AuthProvider>
						<IfFirebaseUnAuthed><Signup /></IfFirebaseUnAuthed>
					</AuthProvider>
				)
			},
			{
				path: "/auth/login",
				element: (
					<AuthProvider>
						<IfFirebaseUnAuthed><Login /></IfFirebaseUnAuthed>
					</AuthProvider>
				)
			},
			{
				path: "*",
				element: (
					<AuthProvider>
						<IfFirebaseUnAuthed><Navigate to="/auth/login" /></IfFirebaseUnAuthed>
					</AuthProvider>
				)
			}
		]
	}]);



	return <RouterProvider router={router} />
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);