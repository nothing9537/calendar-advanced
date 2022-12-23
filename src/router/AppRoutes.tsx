import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './index'
import Event from '../pages/Event'
import Login from '../pages/Login'

export default function AppRoutes() {
	return (
		<Routes>
			<Route path={RouteNames.LOGIN} element={<Login />} />
			<Route path={RouteNames.EVENT} element={<Event />} />
			<Route path='*' element={<div> NOT FOUND </div>} />
		</Routes>
	)
}
