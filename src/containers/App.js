import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page';
import User from '../components/User';
import { setYear } from '../actions/PageActions';
import './App.css';

class App extends Component {
	render() {
		const { user, page, setYear } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой топ фото</h1>
				</header>
				<User name={user.name} />
				<Page photos={page.photos} year={page.year} setYear={setYear} />
			</div>
		);
	}
}

const mapStateToProps = store => {
	console.log(store);
	return {
		user: store.user,
		page: store.page,
	};
};

const mapDispatchToProps = dispatch => ({
	setYear: year => dispatch(setYear(year)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
