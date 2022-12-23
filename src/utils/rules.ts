import dayjs, { Dayjs } from 'dayjs';
export const rules = {
	required: (message: string = 'This field is required') => ({
		required: true,
		message
	}),
	isDateBefore: (message: string) => () => ({
		validator(_: any, value: Dayjs) {
			if (dayjs().isBefore(value)) {
				return Promise.resolve()
			} else {
				return Promise.reject(new Error(message))
			}
		}
	})
}