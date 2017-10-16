import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import Header from '../public/header'
import Main from './main'
import Api from './api/'

class Index extends Component {
	render () {
		return (
			<div>
				<Header />
				<div>
					<Route exact path={`${this.props.match.url}`} component={ Main }/>
					<Route path={`${this.props.match.url}/api`} component={ Api }/>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({user: state}),
	{ }
)(Index)