import {$authHost, $host} from "./index";

// Types
export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}
export const updateTypeSideBrand = async (type) => {
    const {data} = await $authHost.post('api/type/update', type)
    return data
}
export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}
// Interest
export const createInterest = async (interest) => {
    const {data} = await $authHost.post('api/interest', interest)
    return data
}

export const fetchInterest = async () => {
    const {data} = await $host.get('api/interest')
    return data
}

// Brands
export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}
//Devices

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}
export const updateDevice = async (device) => {
    const {data} = await $authHost.post('api/device/update', device)
    return data
}
export const updateDeviceStatus = async (device) => {
    const {data} = await $authHost.post('api/device/update/status', device)
    return data
}
export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

// Get one Device

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
// Delete one Device
export const deleteOneDevice = async (id) => {
    const {data} = await $host.post('api/device/' + id)
    return data
}