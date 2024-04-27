import {  privateAxios } from "./helper";
export const getAdmin = async (id) => {
    return await privateAxios.get(`/admin/GetAdminById/${id}`).then((resp) =>  resp.data)
}