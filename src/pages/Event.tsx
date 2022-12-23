import { Button, Layout, Modal, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/Forms/EventForm'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { IEvent } from '../models/IEvent'
import { createEvent, fetchEvents, fetchGuests } from '../redux/reducers/event.slice'
import { parseSelectOptions } from '../utils/parseSelectOptions'

export default function Event() {

	const dispatch = useAppDispatch()

	const { guests, events } = useAppSelector(state => state.event)
	const { user } = useAppSelector(state => state.auth)

	const [isModalVisible, setModalVisible] = useState(false)

	function handleOk() {
		setModalVisible(false)
	}

	function handleCancel() {
		setModalVisible(false)
	}

	useEffect(() => {
		dispatch(fetchGuests())
		dispatch(fetchEvents(user.username))
	}, [])

	function handleSubmit(event: IEvent) {
		dispatch(createEvent(event))
		setModalVisible(false)
	}

	return (
		<Layout>
			<EventCalendar events={events} />
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
					submit={handleSubmit}
				/>
			</Modal>
		</Layout>
	)
}
