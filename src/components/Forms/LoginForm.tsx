import React from 'react'
import { Button, Form, Input } from 'antd'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { login } from '../../redux/reducers/auth.slice';
import { rules } from '../../utils/rules'
import { IUser } from '../../models/IUser';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';

export default function LoginForm() {

	const dispatch = useAppDispatch()
	const { error, isLoading } = useAppSelector(state => state.auth)
	const navigate = useNavigate()

	async function handleFinish(data: IUser) {
		await dispatch(login(data))
		navigate(RouteNames.EVENT)
	}

	return (
		<Form
			onFinish={handleFinish}
		>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<Form.Item
				label='Username'
				name='username'
				rules={[rules.required('You must fill this field')]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label='Password'
				name='password'
				rules={[rules.required('You must fill this field')]}
			>
				<Input type={'password'} />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' loading={isLoading}>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}
