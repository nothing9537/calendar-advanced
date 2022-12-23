import { IUser } from './../models/IUser';
import axios, { AxiosResponse } from "axios";
import { endpoints, url } from "./index";

export class UsersService {
	static async getUsers(): Promise<AxiosResponse<IUser[]>> {
		return axios.get<IUser[]>(url + endpoints.users.get)
	}
}