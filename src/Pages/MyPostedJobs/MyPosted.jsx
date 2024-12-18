import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import HotJobCard from '../Home/HotJobCard';
import { Link } from 'react-router-dom';

const MyPosted = () => {
    const { user } = useAuth();
    const [myJobs, setMyJobs] = useState([]);

    useEffect(() => {
        fetch(`https://job-server-xi.vercel.app/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyJobs(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [user?.email])

    return (
        <div className=''>
            <h1 className="text-4xl text-center font-semibold mb-8">My Posted Jobs</h1>
            <div className="overflow-x-auto min-h-[70vh]">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Company Name</th>
                            <th>JOB</th>
                            <th>Application Count</th>
                            <th>Deadline</th>
                            <th>Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myJobs?.map((job, index) => <tr key={job._id}>
                                <td>
                                    <div className="font-bold">{index + 1}</div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-lg">{job.title}</span>
                                </td>
                                <td>{job.applicationCount}</td>
                                <td>{job.applicationDeadline}</td>
                                <th>
                                    <Link to={'/viewapply'}><button className="btn btn-link btn-sm">View</button></Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPosted;