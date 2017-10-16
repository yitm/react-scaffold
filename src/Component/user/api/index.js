import React, { Component } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import Set from './set'
import Member from './member'
import ErrCode from './errcode'

class Api extends Component {
	render () {
		const { props } = this
		const url = props.match.url
		const pathname = props.location.pathname
		console.log(this)
		return (
			<div className="userapi-main">
				<Link to="/user/api">set</Link>
				<Link to="/user/api/member">member</Link>
				<Link to="/user/api/errcode">error</Link>
				<Route exact path={`${url}`} component={ Set }/>
				<Route exact path={`${url}/member`} component={ Member }/>
				<Route exact path={`${url}/errcode`} component={ ErrCode }/>
			</div>
		)
	}
}

export default Api