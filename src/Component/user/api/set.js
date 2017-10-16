import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
	render () {
		return (
			<div>
				Set
			</div>
		)
	}
}
export default connect(
	state => ({user: state}),
	{ }
)(Index)