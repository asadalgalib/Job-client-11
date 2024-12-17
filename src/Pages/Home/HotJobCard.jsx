import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    
    const { title, location, company_logo, company, jobType, requirements, description, salaryRange,_id } = job;
    return (
        <div className="rounded-lg bg-slate-100 p-4 border">
            <div className='flex gap-2 items-center'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-xl font-semibold">{company}</h4>
                    <p className='flex items-center gap-1'><FaLocationDot className='text-slate-400'></FaLocationDot> {location}</p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold flex gap-2 items-center">{title}
                    <div className="badge bg-sky-300">NEW</div>
                </h2>
                <div className='flex items-center gap-4 mt-1'>
                    <p>{jobType}</p>
                    <p>5 min ago</p>
                </div>
                <p className='mt-4'>{description}</p>
                <div className='flex flex-wrap items-center gap-1 mt-5'>
                    {
                        requirements.map((req, index) => <p key={index} className='hover:text-blue-500 px-3 py-1 bg-green-100 border rounded-md'>{req}</p>)
                    }
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <div className=''>
                        <p className='text-lg text-sky-600 font-semibold'>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    </div>
                    <Link to={`/jobs/${_id}`}><button className='btn btn-outline bg-sky-300 border-none'>Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;