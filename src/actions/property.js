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

export const getAllProperty = async ({ page, limit }) => {
    let resp = await fetchWithoutToken(`/property/getAll?page=${page}&limit=${limit}`, {
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

export const updateProperty = async (body) => {
    let resp = await fetchWithToken("/user/properties/edit", {
        method: "PUt",
        body: JSON.stringify(body),
    })
    resp = resp.results.data
    return resp
}

export const deleteProperty = async (propertyId) => {
    let resp = await fetchWithToken(`/user/properties/delete/${propertyId}`, {
        method: "DELETE"
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

export const uploadPropertyImage = async ({ body }) => {
    let resp = await fetchWithToken("/property/upload/file", {
        method: "POST",
        noContentType: true,
        body,
    })
    resp = resp.results
    return resp
}

export const createWebsiteEnquiry = async (body) => {
    let resp = await fetchWithoutToken("/enquiry/website/add", {
        method: "POST",
        body: JSON.stringify(body),
    })
    resp = resp.results.data
    return resp
}

export const createPropertyEnquiry = async ({ body, propertyId }) => {
    let resp = await fetchWithoutToken(`/enquiry/property/add/${propertyId}`, {
        method: "POST",
        body: JSON.stringify(body),
    })
    resp = resp.results.data
    return resp
}

export const getPropertyEnquiry = async (propertyId) => {
    let resp = await fetchWithToken(`/enquiry/property/getAll/${propertyId}`, {
        method: "GET"
    })
    resp = resp.results.data
    return resp
}

export const getPropertyVisits = async (propertyId) => {
    let resp = await fetchWithToken(`/enquiry/property/getAll/visit/${propertyId}`, {
        method: "GET"
    })
    resp = resp.results.data
    return resp
}

export const downloadPropertyEnquiry = async (propertyId) => {
    let resp = await fetchWithToken(`/enquiry/property/export/${propertyId}`, {
        method: "GET",
    })
    return resp
}

export const downloadPropertyVisit = async (propertyId) => {
    let resp = await fetchWithToken(`/enquiry/property/export/visit/${propertyId}`, {
        method: "GET",
    })
    return resp
}

export const getWebsiteEnquiry = async () => {
    let resp = await fetchWithToken("/enquiry/website/getAll/", {
        method: "GET"
    })
    resp = resp.results.data
    return resp
}

export const downloadWebsiteEnquiry = async () => {
    let resp = await fetchWithToken(`/enquiry/website/export`, {
        method: "GET",
    })
    return resp
}