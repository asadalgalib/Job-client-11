import React, { useContext } from 'react';
import { motion } from "motion/react"
import imgOne from '../../assets/corporate-workers-brainstorming-together.jpg'
import imgTwo from '../../assets/businesspeople-having-informal-meeting.jpg'
import AuthContext from '../../Context/AuthContext';

const Banner = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="hero bg-base-300 py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={imgTwo}
                        animate={{ y: [20, 50, 20] }} transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500" />
                    <motion.img
                        src={imgOne}
                        animate={{ x: [70, 100, 70] }} transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-80 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500" />
                </div>
                <div className='flex-1'>
                    {
                        user && <motion.h1 animate={{ y: -25, transition: { duration: 0.5 } }} className="text-2xl mb-2 font-medium">Welcome <span className='text-sky-500'>{user?.displayName}</span>!</motion.h1>
                    }
                    <motion.h1 animate={{ y: -25, transition: { duration: 0.5 } }} className="text-5xl font-bold">The <motion.span animate={{ color: ['#14b8a6', '#0ea5e9', '#6366f1', '#ec4899'] }} transition={{ duration: 3, repeat: Infinity }} className='text-sky-300'>Easiest Way </motion.span>
                        to Get Your New Job</motion.h1>
                    <motion.p animate={{ y: -25, transition: { duration: 0.5 } }} className="pt-6 max-w-lg">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </motion.p>
                    <button  className="btn btn-outline bg-sky-300 border-none">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;