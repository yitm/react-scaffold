import React, { Component } from 'react'
import { Route } from 'react-router'
import 'normalize.css/normalize.css'
import './styles/app.css'

import Home from './Component/home/index'
import User from './Component/user/index'

class Routers extends Component {
  render () {
    return (
      <div>
        <Route exact path="/" component={ Home } />
        <Route path="/user" component={ User } />
      </div>
    )
  }
}

export default Routers