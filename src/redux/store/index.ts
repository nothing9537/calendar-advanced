import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducers/auth.slice'

export const store = configureStore({
	reducer: {
		auth: authReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch