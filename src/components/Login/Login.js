import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleSignIn = () => {
        signInWithGoogle()
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container text-center mt-5'>
            <button onClick={handleSignIn} type='button' className='btn btn-warning'>Google Sign in</button>
        </div>
    );
};

export default Login;