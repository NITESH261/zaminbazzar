"user server"

import { fetchWithToken } from "@/services/fetch"

const baseUrl = 'https://6741e603e4647499008f2ca9.mockapi.io/api/v1/'

export const getAllProperty = async () => {
    let resp = await fetch(baseUrl + "allproperties", { method: "GET" })

    return resp.json()
}

export const createProperty = async (body) => {
    let resp = await fetchWithToken("/property/add", {
        method: "POST",
        body: JSON.stringify(body),
    })
    resp = resp.results.data
    return resp
}

export const uploadPropertyImage = async body => {
    let resp = await fetchWithToken("/property/upload/file", {
        method: "POST",
        noContentType: true,
        body,
    })

    resp = resp.results.data

    return resp
}