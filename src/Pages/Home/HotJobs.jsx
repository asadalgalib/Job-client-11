import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-server-xi.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

   
    return (
        <div className='py-20'>
            <h1 className="text-4xl text-center font-semibold mb-8">Hot Jobs</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    jobs.map(job =><HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;