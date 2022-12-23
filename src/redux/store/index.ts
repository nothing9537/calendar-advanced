import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducers/auth.slice'
import eventReducer from '../reducers/event.slice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		event: eventReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch