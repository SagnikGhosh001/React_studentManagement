import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../auth';

const Privateroute = () => {

    return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />
}
export default Privateroute