import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate() 

    const handleApply = e => {
        e.preventDefault();

        const form = e.target;
        const linkedin = form.LinkedIn.value;
        const github = form.Github.value;
        const resume = form.Resume.value;

        console.log(linkedin, github, resume);

        const jobApplication = { job_id: id, applicant_email: user.email, linkedin, github, resume };

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Application Submited",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myapply')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='max-w-sm mx-auto my-16 shadow-2xl p-10 rounded-lg'>
            <h1 className='text-center text-3xl font-semibold mb-2'>Apply Now...!</h1>
            <form onSubmit={handleApply}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" placeholder="LinkedIn URL" name='LinkedIn' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" placeholder="Github URL" name='Github' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" placeholder="Resume URL" name='Resume' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline bg-sky-300 border-none">Appy</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;