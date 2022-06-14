import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <p className='text-center'>Loading...</p>
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default PrivateRoute;