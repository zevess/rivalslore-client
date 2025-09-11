import type { CreateAxiosDefaults } from "axios";
import axios from "axios"
import { SERVER_URL } from "../config/api.config";
import { getContentType } from "./api.helper";

const options: CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: getContentType(),
    
}

const api = axios.create(options)

export { api }