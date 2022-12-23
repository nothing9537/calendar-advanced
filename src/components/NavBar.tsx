import { Layout } from 'antd'
import { Row } from 'antd/es/grid'
import Menu from 'antd/es/menu'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import { RouteNames } from '../router'
import { logout } from '../redux/reducers/auth.slice'
import { useAppDispatch } from '../hooks/useAppDispatch'

export default function NavBar() {

	const navigate = useNavigate()
	const { isAuth, user } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()

	function handleLogin() {
		navigate(RouteNames.LOGIN)
	}

	function handleLogout() {
		navigate(RouteNames.LOGIN)
		dispatch(logout())
	}

	return (
		<Layout.Header>
			<Row justify='end'>
				{isAuth
					?
					<>
						<div style={{ color: 'white' }}>{user.username}</div>
						<Menu theme='dark' selectable={false}>
							<Menu.Item
								key={0}
								onClick={handleLogout}
							>
								Exit
							</Menu.Item>
						</Menu>
					</>
					:
					<Menu theme='dark' selectable={false}>
						<Menu.Item
							key={1}
							onClick={handleLogin}
						>
							Login
						</Menu.Item>
					</Menu>
				}
			</Row>
		</Layout.Header>
	)
}
