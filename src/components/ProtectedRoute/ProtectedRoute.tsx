import React, {FC, PropsWithChildren} from "react";
import {Navigate} from "react-router-dom";

interface IProtectedRoute {
    children: any
    isloggedIn: boolean,
    path: string
}

const ProtectedRoute: FC <IProtectedRoute> = ({children, isloggedIn}) => {
    return isloggedIn ? children : <Navigate to='/signin'/>
}

export default ProtectedRoute