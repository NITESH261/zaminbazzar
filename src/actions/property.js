"user server"

const baseUrl = 'https://6741e603e4647499008f2ca9.mockapi.io/api/v1/'

export const getAllProperty = async () => {
    let resp = await fetch(baseUrl + "allproperties", { method: "GET" })

    return resp.json()
}

export const createProperty = async (params) => {

}