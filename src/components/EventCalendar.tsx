import { Calendar } from 'antd'
import React from 'react'
import { IEvent } from '../models/IEvent'

interface Props {
	events: IEvent[]
}

export default function EventCalendar({ events }: Props) {
	return (
		<Calendar />
	)
}
