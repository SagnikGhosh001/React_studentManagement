import { myAxios, privateAxios } from "./helper";

export const signUp = async (user) => {
    return await myAxios
        .post('/student/AddStudent', user)
        .then((response) => response.data)
};

export const loginUser = async (loginDetail) => {
    return await myAxios.post('/user/login', loginDetail).then((response) => response.data)
}

export const getUser = async (id) => {
    return await privateAxios.get(`/student/StudentbyId/${id}`).then((resp) =>  resp.data)
}

export const getAlluser = async (role) => {
    return await privateAxios.get(`/student/AllStudents/${role}`).then((Response) => {
        return Response.data
    })
}
export const deleteUserService=async(id,role)=>{
    return await privateAxios.delete(`/student/DeleteStudent/${id}/${role}`).then((resp)=>resp.data)
}
export const updateUser = async (id, user) => {
    return await privateAxios.put(`/student/UpdateStudents/${id}`, user).then((response) => response.data)
}
export const updateUserPasswordr = async (id, user) => {
    return await privateAxios.put(`/student/ChangePassword/${id}`, user).then((response) => response.data)
}
export const updateUserUsername = async (id, user) => {
    return await privateAxios.put(`/student/ChangeUsername/${id}`, user).then((response) => response.data)
}
export const forgetPassword = async (email, user) => {
    return await myAxios.put(`/student/ForgetPassword/${email}`, user).then((response) => response.data)
}