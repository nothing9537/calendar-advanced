import { EventService } from "./EventService"
import { UsersService } from "./UsersService"

export const url = '/users.json'

export const endpoints = {
	users: {
		get: ''
	}
}

export const API = {
	UsersService,
	EventService
}

export default API