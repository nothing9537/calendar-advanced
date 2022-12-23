import { IUser } from './../../models/IUser';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IEvent } from '../../models/IEvent';
import API from '../../API';

interface EventState {
	guests: IUser[];
	events: IEvent[];
}

const initialState: EventState = {
	events: [],
	guests: []
}

export const fetchGuests = createAsyncThunk(
	'event/fetchGuests',
	async () => {
		const response = await API.UsersService.getUsers()
		return response.data
	}
)

export const fetchEvents = createAsyncThunk(
	'event/fetchEvents',
	async (username: string) => {
		const events = API.EventService.getEvents() as IEvent[]
		const currentEvents = events.filter((event, index) => event.author !== username || event.guests[index] !== username)
		return currentEvents
	}
)

export const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		setGuests: (state, { payload }) => {
			state.guests = payload
		},
		setEvents: (state, { payload }) => {
			state.events = payload
		},
		createEvent: (state, { payload }) => {
			const events = API.EventService.getEvents() as IEvent[]
			events.push(payload)
			state.events = events
			localStorage.setItem('events', JSON.stringify(events))
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchGuests.fulfilled, (state, { payload }) => {
			state.guests = payload
		})
		builder.addCase(fetchEvents.fulfilled, (state, { payload }) => {
			state.events = payload
		})
	}
})

export const { setEvents, setGuests, createEvent } = eventSlice.actions
export default eventSlice.reducer