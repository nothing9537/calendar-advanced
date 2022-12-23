import Layout from 'antd/es/layout'
import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import { useAppDispatch } from './hooks/useAppDispatch'
import { IUser } from './models/IUser'
import { setAuth, setUser } from './redux/reducers/auth.slice'
import AppRoutes from './router/AppRoutes'

export default function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setUser({ username: localStorage.getItem('username') || '' } as IUser))
      dispatch(setAuth(true))
    }
  }, [])

  return (
    <Layout className='App'>
      <NavBar />
      <Layout.Content>
        <AppRoutes />
      </Layout.Content>
    </Layout>
  )
}
