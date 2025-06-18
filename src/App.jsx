import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './views/Login/index'




export default class App extends Component {
	render() {
		return (
			<Routes>
				<Route element={<Login/>} path='/'/>
			</Routes>
		)
	}
}
