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
			<div className="ib page">
				<p>
					<button className="btn" onClick={this.handleYearUpdate}>
						2018
					</button>{' '}
					<button className="btn" onClick={this.handleYearUpdate}>
						2017
					</button>{' '}
				</p>
				<h3>{year} год</h3>
				<p>У тебя {photos.length} фото.</p>
			</div>
		);
	}
}

Page.propType = {
	photos: PropTypes.array.isRequired,
	year: PropTypes.number.isRequired,
};

export default Page;
