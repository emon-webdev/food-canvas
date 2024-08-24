import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation();
    if (loading) {
        return <div className="flex w-52 flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-28"></div>
                </div>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"  state={{ from: location }} replace />;
};

export default PrivateRoute;