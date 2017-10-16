import React, { Component } from 'react'

class ErrCode extends Component {
	constructor (props) {
		super(props)

		this.state = {
			data: "error"
		}
	}

	render () {
		return (
			<div>
				{this.state.data}
			</div>
		)
	}
}

export default ErrCode