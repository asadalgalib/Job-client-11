import React from 'react';
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='min-h-[90vh] flex items-center justify-center'><span className="loading loading-spinner text-info"></span></div>
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to={'/signin'} state={location?.pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;