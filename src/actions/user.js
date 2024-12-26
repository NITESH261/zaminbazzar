"use server"

import { fetchWithoutToken } from "@/services/fetch";

export const signUp = async (body) => {
    let resp = await fetchWithoutToken("/client/signup", {
        method: "POST",
        body: JSON.stringify(body),
    })
    resp = resp.results.data
    return resp
}

export const logIn = async (body) => {
    let resp = await fetchWithoutToken("/client/login", {
        method: "POST",
        body: JSON.stringify(body),
    })
    resp = resp.results.data
    return resp
}
