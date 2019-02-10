import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
	handleYearUpdate = e => {
		const newYear = +e.currentTarget.innerText;
		this.props.setYear(newYear);
	};

	render() {
		const { photos, year } = this.props;
		return (
			<div>
				<div>
					<button onClick={this.handleYearUpdate}>2018</button>
					<button onClick={this.handleYearUpdate}>2017</button>
				</div>
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
