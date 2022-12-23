import { Calendar } from 'antd'
import React from 'react'
import { IEvent } from '../models/IEvent'
import { Dayjs } from 'dayjs'
import { formatDate } from '../utils/date'

interface Props {
	events: IEvent[]
}

export default function EventCalendar({ events }: Props) {

	function dateCellRender(value: Dayjs) {

		const formatedDate = formatDate(value)
		const formatedEvents = events.filter((event) => event.date === formatedDate)

		return (
			<ul>
				{formatedEvents.map((event, index) =>
					<li
						key={index}
					>
						{event.description}
					</li>
				)}
			</ul>
		)
	}

	return (
		<Calendar
			dateCellRender={dateCellRender}
		/>
	)
}
