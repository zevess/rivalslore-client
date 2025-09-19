import type { CreateAxiosDefaults } from "axios";
import axios from "axios"
import { getContentType } from "./api.helper";
import { SERVER_URL } from "../config/api.config";

const options: CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: getContentType(),
    
}

const api = axios.create(options)

export { api }