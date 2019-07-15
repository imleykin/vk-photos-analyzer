import {
	GET_PHOTOS_REQUEST,
	GET_PHOTOS_SUCCESS,
	GET_PHOTOS_FAIL,
} from '../actions/PageActions';

const initialState = {
	photos: [],
	year: 2018,
	error: '',
	isFetching: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return { ...state, isFetching: true, year: action.payload, error: '' };
		case GET_PHOTOS_SUCCESS:
			return { ...state, isFetching: false, photos: action.payload };
		case GET_PHOTOS_FAIL:
			return { ...state, isFetching: false, error: action.payload.message };
		default:
			return state;
	}
};
