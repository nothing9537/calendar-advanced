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
	},
	extraReducers: (builder) => {
		builder.addCase(fetchGuests.fulfilled, (state, { payload }) => {
			state.guests = payload
		})
	}
})

export const { setEvents, setGuests } = eventSlice.actions
export default eventSlice.reducer