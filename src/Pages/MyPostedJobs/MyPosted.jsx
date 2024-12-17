import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import HotJobCard from '../Home/HotJobCard';

const MyPosted = () => {
    const {user} = useAuth();
    const [myJobs, setMyJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setMyJobs(data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[user?.email])

    console.log(myJobs);
    return (
        <div className='py-20'>
            <h1 className="text-4xl text-center font-semibold mb-8">My Posted Jobs</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    myJobs.map(myJob =><HotJobCard key={myJob._id} job={myJob}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default MyPosted;