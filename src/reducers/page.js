import { SET_YEAR } from '../actions/PageActions';

const initialState = {
	photos: [],
	year: 2018,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_YEAR:
			return { ...state, year: action.payload };
		default:
			return state;
	}
};
