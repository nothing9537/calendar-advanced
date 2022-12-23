import { IEvent } from './../models/IEvent';
export class EventService {
	static getEvents(): IEvent[] | [] {
		const events = localStorage.getItem('events') || '[]'
		return JSON.parse(events)
	}
}