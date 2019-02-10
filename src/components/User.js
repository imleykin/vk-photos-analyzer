import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
	render() {
		const { name } = this.props;
		return (
			<div className="ib user">
				<p>Привет, {name}!</p>
			</div>
		);
	}
}

User.propType = {
	name: PropTypes.number.isRequired,
};

export default User;
