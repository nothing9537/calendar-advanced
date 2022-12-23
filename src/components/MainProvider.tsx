import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../redux/store'

export default function MainProvider({ children }: { children: React.ReactElement }) {
	return (
		<Provider store={store}>
			<Router>
				{children}
			</Router>
		</Provider>
	)
}
