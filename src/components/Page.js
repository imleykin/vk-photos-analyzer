import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
	handleYearUpdate = e => {
		const newYear = +e.currentTarget.innerText;
		this.props.getPhotos(newYear);
	};

	render() {
		const { photos, year, isFetching /*error*/ } = this.props;

		// console.log(photos);

		return (
			<div className="ib page">
				<p>
					<button className="btn" onClick={this.handleYearUpdate}>
						2018
					</button>{' '}
					<button className="btn" onClick={this.handleYearUpdate}>
						2017
					</button>{' '}
					<button className="btn" onClick={this.handleYearUpdate}>
						2016
					</button>{' '}
					<button className="btn" onClick={this.handleYearUpdate}>
						2015
					</button>{' '}
					<button className="btn" onClick={this.handleYearUpdate}>
						2014
					</button>{' '}
				</p>
				<h3>{year} год</h3>
				<p>У тебя {photos.length} фото.</p>
				<p>{isFetching ? 'Загрузка' : null}</p>
				<div>
					{photos.map(photo => (
						<img key={photo.id} src={photo.photo_130} alt={photo.text} />
					))}
				</div>
			</div>
		);
	}
}

Page.propTypes = {
	photos: PropTypes.array.isRequired,
	year: PropTypes.number.isRequired,
};

export default Page;
