import React from 'react'
import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Dayjs } from 'dayjs';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IEvent } from '../../models/IEvent';
import { formatDate } from '../../utils/date';
import { rules } from '../../utils/rules'

interface Props {
	guests: { label: string; value: string }[];
	submit: (event: IEvent) => void
}

export default function EventForm({ guests, submit }: Props) {

	const { user } = useAppSelector(state => state.auth)

	async function handleFinish(data: { description: string; date: Dayjs; guests: string[]; }) {
		submit({ ...data, author: user.username, date: formatDate(data.date) })
	}

	return (
		<Form
			onFinish={handleFinish}
		>
			<Form.Item
				label='Event description'
				name='description'
				rules={[rules.required()]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label='Date of event'
				name='date'
				rules={[rules.required(), rules.isDateBefore('You cannot add an event on a past date')]}
			>
				<DatePicker />
			</Form.Item>
			<Form.Item
				label='Guests'
				name='guests'
			>
				<Select
					mode='multiple'
					placeholder='Pick users to add them to the event'
					options={guests}
				/>
			</Form.Item>
			<Row justify='end'>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Add event
					</Button>
				</Form.Item>
			</Row>
		</Form>
	)
}
