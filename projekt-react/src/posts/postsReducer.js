const initialState = {
	postsCollection: [
		{ title: "pierwszy", text: "text1", timestamp: 1 },
		{ title: "drugi", text: "text1", timestamp: 2 },
		{ title: "trzeci", text: "text1", timestamp: 3 },
		{ title: "czwarty", text: "text1", timestamp: 4 },
		{ title: "piąty", text: "text1", timestamp: 5 },
		{ title: "szósty", text: "text1", timestamp: 6 },
		{ title: "siódmy", text: "text1", timestamp: 7 }
	]
};
const counter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

const posts = (state = initialState, action) => {
	switch (action.type) {
		case "ADDPOST":
			return {
				...state,
				postsCollection: [...state.postsCollection, action.data]
			};
		case "REMOVEPOST":
			return {
				...state,
				postsCollection: state.postsCollection.filter(
					p => p.timestamp !== action.data
				)
			};
		default:
			return state;
	}
};

export { counter, posts };
