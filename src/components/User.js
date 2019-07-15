import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
	renderTemplate = () => {
		const { name, error, isFetching } = this.props;

		if (error) {
			return <p>Во время запроса произошла ошибка, обновите страницу</p>;
		}

		if (isFetching) {
			return <p>Загружаю...</p>;
		}

		if (name) {
			return <p>Привет, {name}!</p>;
		}

		return (
			<button className="btn" onClick={this.props.handleLogin}>
				Войти
			</button>
		);
	};

	render() {
		return <div className="ib user">{this.renderTemplate()}</div>;
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	error: PropTypes.string,
	isFetching: PropTypes.bool.isRequired,
	handleLogin: PropTypes.func.isRequired,
};

export default User;
