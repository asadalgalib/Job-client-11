import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import resAni from '../../assets/Animation - 1733945044896.json'
import AuthContext from '../../Context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin';

const Register = () => {
    const { createUser,user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return alert('password must be valid');
        }
        if (user) {
            return alert('You have already logged in');
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate('/');
            })
            .catch(err => {
                console.log(err.code);
            })
    }

    return (
        <div className="hero py-14">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 justify-between">
                <div className="text-center">
                    <Lottie animationData={resAni}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-center text-2xl font-semibold'>Start For Free Today</h1>
                        <p className='text-center pb-2'>Access to all features. No credit card required.</p>
                        <SocialLogin></SocialLogin>
                        <p className=' text-center font-semibold pt-2'>Or continue with</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='Name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='Photo URL' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline bg-sky-300 border-none">Register</button>
                            </div>
                            <p className='py-4 text-center '>Already have an accout? <NavLink className='text-sky-500' to={'/signin'}>Login</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register;