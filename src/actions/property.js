"user server"

import { fetchWithoutToken, fetchWithToken } from "@/services/fetch";

const formatFilterForQuery = (filter) => {
    const queryString = new URLSearchParams();

    Object.keys(filter).forEach((key) => {
        const value = filter[key];

        if (Array.isArray(value)) {
            value.forEach((item) => queryString.append(`${key}[]`, item));
        } else if (value !== undefined && value !== null) {
            queryString.append(key, value);
        }
    });

    return queryString.toString();
};

export const getAllProperty = async () => {
    let resp = await fetchWithoutToken("/property/getAll", {
        method: "GET"
    })
    resp = resp.results.data
    return resp
}

export const getOneProperty = async (propertyId) => {
    let resp = await fetchWithoutToken(`/property/${propertyId}`, {
        method: "GET"
    })
    resp = resp.results.data
    return resp
}

export const createProperty = async (body) => {
    let resp = await fetchWithToken("/property/add", {
        method: "POST",
        body: JSON.stringify(body),
    })
    resp = resp.results.data
    return resp
}

export const filterProperty = async (filter) => {
    const formattedFilter = formatFilterForQuery(filter)
    const queryParams = new URLSearchParams(formattedFilter).toString()

    let resp = await fetchWithoutToken(`/property/getAll/filter?${queryParams}`, {
        method: "GET",
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