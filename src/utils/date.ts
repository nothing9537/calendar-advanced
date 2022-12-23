import { Dayjs } from "dayjs"

export const formatDate = (date: Dayjs) => `${date.year()}.${date.month() + 1}.${date.date()}`