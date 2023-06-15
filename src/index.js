import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "./contexts/FirebaseAuthContext";
import Home from "./pages/Home";

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
						<IfFirebaseAuthed><Navigate to="/" /></IfFirebaseAuthed>
					</AuthProvider>
				)
			},
			{
				path: "/auth/login",
				element: (
					<AuthProvider>
						<IfFirebaseUnAuthed><Login /></IfFirebaseUnAuthed>
						<IfFirebaseAuthed><Navigate to="/" /></IfFirebaseAuthed>
					</AuthProvider>
				)
			},
			{
				path: "/",
				element: (
					<AuthProvider>
						<IfFirebaseAuthed><Home /></IfFirebaseAuthed>
						<IfFirebaseUnAuthed><Navigate to="/auth/login" /></IfFirebaseUnAuthed>
					</AuthProvider>
				)
			},
			{
				path: "*",
				element: (
					<AuthProvider>
						<IfFirebaseUnAuthed><Navigate to="/auth/login" /></IfFirebaseUnAuthed>
						<IfFirebaseAuthed><Navigate to="/" /></IfFirebaseAuthed>
					</AuthProvider>
				)
			}
		]
	}]);



	return <RouterProvider router={router} />
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);