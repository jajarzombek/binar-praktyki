import { createStore } from "redux";
const initialState = {
	posts: [
		{ title: "pierwszy", text: "text1", timestamp: 1 },
		{ title: "drugi", text: "text1", timestamp: 2 },
		{ title: "trzeci", text: "text1", timestamp: 3 },
		{ title: "czwarty", text: "text1", timestamp: 4 },
		{ title: "piąty", text: "text1", timestamp: 5 },
		{ title: "szósty", text: "text1", timestamp: 6 },
		{ title: "siódmy", text: "text1", timestamp: 7 }
	],
	counter: 0
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter + 1 };
		case "DECREMENT":
			return { ...state, counter: state.counter - 1 };
		case "ADDPOST":
			return { ...state, posts: [...posts, action.data] };
		// case "REMOVEPOST":
		//   return { ...state, posts: [...posts,action.data ]}
		default:
			return initialState;
	}
};
const store = createStore(reducer);

export default store;
