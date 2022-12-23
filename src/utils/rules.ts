export const rules = {
	required: (message: string = 'This field is required') => ({
		required: true,
		message
	})
}