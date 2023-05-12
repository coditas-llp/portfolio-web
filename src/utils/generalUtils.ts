import { BASE_URL } from "../HTTP";
import { format } from "date-fns";

export const getFullUrl = (imageURL: string = '') => `${BASE_URL}${imageURL}`

export const formatDate = (date: string = new Date().toString()) => format(new Date(date) as any, "do MMMM yyyy")