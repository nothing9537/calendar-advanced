import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import React from 'react'
import { rules } from '../../utils/rules'
import Moment from 'moment'

interface Props {
	guests: { label: string; value: string }[];
}

export default function EventForm({ guests }: Props) {

	async function handleFinish(data: any) {
		console.log(data);
	}

	// const [date, setDate] = useState<Moment>()

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
				rules={[rules.required()]}
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
