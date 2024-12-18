import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import logani from '../../assets/Animation - 1733997500391.json'
import AuthContext from '../../Context/AuthContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin';
import axios from 'axios';

const Signin = () => {
    const { loginUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (user) {
            return alert('You have already logged in');
        }
        loginUser(email, password)
            .then(result => {
                const user = result.user.email
                axios.post('https://job-server-xi.vercel.app/jwt', user, { withCredentials: true })
                    .then(data => {
                        console.log('login')
                    })
                    .catch(err => (console.log(err)))

                form.reset();
                navigate(`${location?.state ? location.state : '/'}`);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero py-14">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 justify-between">
                <div className="text-center w-96">
                    <Lottie animationData={logani}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-center text-2xl font-semibold'>Member Login</h1>
                        <p className='text-center pb-2'>Access to all features. No credit card required.</p>
                        <SocialLogin></SocialLogin>
                        <p className=' text-center font-semibold pt-2'>Or continue with</p>
                        <form onSubmit={handleLogin}>
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
                                <label>
                                    <button><small className='underline'>Forgot password?</small></button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline bg-sky-300 border-none">Login</button>
                            </div>
                            <p className='py-4 text-center '>Don't have an account? <NavLink className='text-sky-500' to={'/register'}>Register</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;