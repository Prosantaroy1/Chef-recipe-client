import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
        const {user} = useContext(AuthContext);
        ////
        const location = useLocation();
        
        if(user){
            return children;
        }
        return   <Navigate to="/login" state={{ from: location }} replace />;
    
};

export default PrivetRoutes;