import {  privateAxios } from "./helper";

export const loadAllCourse= async()=>{
    return await privateAxios.get('/course/AllCourses').then((Response)=>{
        return Response.data
    });
};
export const courseById=async(id)=>{
    return await privateAxios.get(`/course/CourseById/${id}`).then((resp)=>{
        return resp.data
    })
}
export const deleteCourseService=async(id,role)=>{
    return await privateAxios.delete(`/course/DeleteCourses/${id}/${role}`).then((resp)=>resp.data)
}

export const updateCourseService=async(id,role,course)=>{
    return await privateAxios.put(`/course/UpdateCourses/${id}/${role}`,course).then((resp)=>resp.data)
}

export const addCourseService=async(course,role)=>{
    return await privateAxios.post(`/course/AddCourse/${role}`,course).then(resp=>{
        return resp.data
    })
}