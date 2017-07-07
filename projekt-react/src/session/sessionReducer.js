const session = (state = { email: "", password: "" }, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				email: action.data.email,
				password: action.data.password
			};
		case "LOGOUT":
			return { email: "", password: "" };
		default:
			return state;
	}
};

export default session;
