const session = (state = { email: "", token: "" }, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.data);
      return {
        ...state,
        email: action.data.email,
        token: action.data.token,
        user_id: action.data.user_id
      };
    case "LOGOUT":
      return { email: "", password: "", user_id: "" };
    default:
      return state;
  }
};

export default session;
