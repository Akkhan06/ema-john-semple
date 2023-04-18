import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUser } from '../AuthContext/AuthContext';

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user, lodding} = useContext(AuthUser)
    if(lodding){
        return "lodding..."
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" /*ITS A LOCATION TO USE LOGIN PAGE, BECOUSE USER LOGIN DON'T STATE LOGIN PAGE*/ state={{from: location}} replace /* */ ></Navigate>;
};

export default PrivateRouter;