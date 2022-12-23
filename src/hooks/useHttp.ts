import axios from 'axios'
import { useEffect, useState } from 'react'

export const useHttp = <T>(url: string, useEffectParams = []) => {

	const [error, setError] = useState<any>('')
	const [isLoading, setLoading] = useState(false)
	const [data, setData] = useState<T>()

	useEffect(() => {
		try {
			(async () => {
				setLoading(true)
				setTimeout(async () => {
					const response = await axios.get<T>(url)
					setData(response.data)
				}, 2000)
			})()
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}, [...useEffectParams])

	return { data, isLoading, error }
}