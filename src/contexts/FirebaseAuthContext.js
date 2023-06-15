import React, { Component, createContext }  from "react";
import app from "../services/FirebaseService";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

export class AuthProvider extends Component {
	state = {
		pending: true,
		user: {}
	};

	componentDidMount() {
		onAuthStateChanged(auth, (user) => {
			this.setState({
				pending: false,
				user
			});
		});
	}

	render() {
		const { children } = this.props;
		const { pending, user } = this.state;

		if (pending) {
			return <></>;
		}

		return (
			<AuthContext.Provider value={{user}}>
				{children}
			</AuthContext.Provider>
		);
	}
}

export function IfFirebaseAuthed({ children }) {
	return (
		<FirebaseAuthConsumer>
			{({ user }) => user ? children : <></>}
		</FirebaseAuthConsumer>
	);
}

export function IfFirebaseUnAuthed({ children }) {
	return (
		<FirebaseAuthConsumer>
			{({ user }) => user ? <></> : children}
		</FirebaseAuthConsumer>
	);
}

export function FirebaseAuthConsumer({ children }) {
	return (
		<AuthContext.Consumer>
			{children}
		</AuthContext.Consumer>
	);
}