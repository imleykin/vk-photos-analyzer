import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
	render() {
		const { photos, year } = this.props;
		return (
			<div>
				<p>
					У тебя {photos.length} фото за {year} год
				</p>
			</div>
		);
	}
}

Page.propType = {
	photos: PropTypes.array.isRequired,
	year: PropTypes.number.isRequired,
};

export default Page;
