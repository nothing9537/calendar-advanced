import { Button, Layout, Modal, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/Forms/EventForm'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { fetchGuests } from '../redux/reducers/event.slice'
import { parseSelectOptions } from '../utils/parseSelectOptions'

export default function Event() {

	const dispatch = useAppDispatch()

	const { guests } = useAppSelector(state => state.event)

	const [isModalVisible, setModalVisible] = useState(false)

	function handleOk() {
		setModalVisible(false)
	}

	function handleCancel() {
		setModalVisible(false)
	}

	useEffect(() => {
		dispatch(fetchGuests())
	}, [])

	return (
		<Layout>
			<EventCalendar events={[]} />
			<Row justify='center'>
				<Button
					type='primary'
					onClick={() => setModalVisible(true)}
				>
					Add event
				</Button>
			</Row>
			<Modal
				title='Add event'
				open={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<EventForm
					guests={parseSelectOptions(guests)}
				/>
			</Modal>
		</Layout>
	)
}
