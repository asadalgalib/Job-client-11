import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import AuthContext from '../Context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { loginWithGoogle, user } = useContext(AuthContext);

    const handleGoogle = () => {
        if (user) {
            return alert('You have already logged in');
        }
        loginWithGoogle()
            .then(res => {
                navigate(`${location?.state ? location.state : '/'}`)
            })
    }
    return (
        <div>
            <button onClick={handleGoogle} className='btn btn-outline bg-white w-full'><FaGoogle></FaGoogle> Continue With Google</button>
        </div>
    );
};

export default SocialLogin;