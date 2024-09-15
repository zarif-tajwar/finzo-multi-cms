import { groq } from "next-sanity";

export const TOTAL_USERS_QUERY = groq`*[_type == 'totalUsersInMillions'] | order(_id)`;
