import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import job from '../assets/icons8-permanent-job-100.png'

const Navbar = () => {
    const { user,logoutUser } = useContext(AuthContext);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addjob'}>Add Job</NavLink></li>
        {
            user && <li><NavLink to={'/myapply'}>My Apply</NavLink></li>
        }
        {
            user && <li><NavLink to={'/myposted'}>My Posted</NavLink></li>
        }
        </>
    return (
        <div className="navbar sticky top-0 z-50 bg-opacity-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className=''>
                    <img className='w-12 h-12' src={job} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ?<><button onClick={logoutUser} className="btn btn-outline border-none bg-sky-300">Logout</button></> :
                        <>
                            <button className="btn btn-outline border-none bg-sky-300"><Link to={'/register'}>Register</Link></button>
                            <Link to={'/signin'}><button className="btn btn-outline border-none bg-sky-300">Login</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;