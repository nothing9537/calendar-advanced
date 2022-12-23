import { API } from './../../API/index';
import { IUser } from './../../models/IUser';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface AuthState {
	isAuth: boolean;
	user: IUser;
	isLoading: boolean;
	error: string
}

const initialState: AuthState = {
	isAuth: false,
	user: {} as IUser,
	error: '',
	isLoading: false
}

export const login = createAsyncThunk(
	'auth/fetchUser/login',
	async ({ password, username }: IUser) => {
		try {
			setLoading(true)
			const response = (await API.UsersService.getUsers()).data
			const mokeUser = response.find((user) => user.username === username && user.password === password)
			return mokeUser
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/fetchUser/logout',
	async () => {
		try {
			//do some server logic
			return { status: 200, error: false }
		} catch (error) {
			setError(error)
		}
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, { payload }) => {
			state.isAuth = payload
			state.isLoading = false
		},
		setUser: (state, { payload }) => {
			state.user = payload
		},
		setError: (state, { payload }) => {
			state.error = payload
			state.isLoading = false
		},
		setLoading: (state, { payload }) => {
			state.isLoading = payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, { payload }) => {
			if (payload) {
				localStorage.setItem('auth', 'true')
				localStorage.setItem('username', payload.username)
				state.user = payload
				state.isAuth = true
				state.error = ''
			} else {
				state.error = 'Incorrect login or password'
			}
		})
		builder.addCase(logout.fulfilled, (state, { payload }) => {
			if (payload?.status === 200) {
				localStorage.removeItem('auth')
				localStorage.removeItem('username')
				state.user = {} as IUser
				state.isAuth = false
				state.error = ''
			} else {
				state.error = 'Something went wrong on server. Please try again'
			}
		})
	}
})

export const { setAuth, setUser, setError, setLoading } = authSlice.actions
export default authSlice.reducer