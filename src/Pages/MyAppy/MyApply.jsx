import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyApply = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState();

    useEffect(() => {
        // fetch(`http://localhost:5000/job-application?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setJobs(data)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

        axios.get(`http://localhost:5000/job-application?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setJobs(res.data);
                console.log(res.data);
            })

    }, [user.email])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/job-application/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Application Deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                const remaining = jobs.filter(job => id !== job._id);
                setJobs(remaining)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="overflow-x-auto min-h-[70vh]">
            <table className="table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Job</th>
                        <th>Deadline</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs?.map(job => <tr key={job._id}>
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
                            <td>{job.deadline}</td>
                            <th>
                                <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-sm">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyApply;