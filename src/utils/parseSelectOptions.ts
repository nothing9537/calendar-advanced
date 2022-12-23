import { IUser } from './../models/IUser';

export const parseSelectOptions = (options: IUser[]) => options.map(({ username }, index) => ({ label: username, value: username }))