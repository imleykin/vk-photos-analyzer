export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_SUCCESS';

export const getPhotos = year => dispatch => {
	dispatch({
		type: GET_PHOTOS_REQUEST,
		payload: year,
	});

	//eslint-disable-next-line no-undef
	VK.Api.call('photos.getAll', { extended: 1, v: '5.73' }, data => {
		if (data.response) {
			const photos = data.response.items
				.filter(({ date }) => {
					console.log();
					const photoDate = new Date(date * 1000);
					return photoDate.getFullYear() === year;
				})
				.sort((photoA, photoB) => {
					console.log(photoA);
					return photoB.likes.count - photoA.likes.count;
				});

			dispatch({ type: GET_PHOTOS_SUCCESS, payload: photos });
		} else {
			dispatch({
				type: GET_PHOTOS_SUCCESS,
				error: true,
				payload: new Error('Ошибка получения фотографий'),
			});
		}
	});
};
