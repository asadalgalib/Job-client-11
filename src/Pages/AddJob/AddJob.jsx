import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";


const AddJob = () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleAddJob = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initData = Object.fromEntries(formData.entries())
        console.log(initData);

        const { min, max, currency, ...newJob } = initData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n')
        newJob.status = 'active'
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Job Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myposted');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='py-14'>
            <div className='bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl card p-10 mx-auto'>
                <h1 className="text-3xl text-center font-semibold mb-2">Post a new JOB</h1>
                <form onSubmit={handleAddJob}>
                    <div className='grid lg:grid-cols-2 lg:gap-10'>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" placeholder="title" name='title' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="location" name='location' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Type</span>
                                </label>
                                <select defaultValue='Select Job Type' name="jobType" className="select select-bordered w-full max-w-md">
                                    <option disabled>Select Job Type</option>
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select defaultValue='Select Job Category' name="category" className="select select-bordered w-full max-w-md">
                                    <option disabled>Select Job Category</option>
                                    <option>Engineering</option>
                                    <option>Marketing</option>
                                    <option>Finance</option>
                                    <option>Teaching</option>
                                </select>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary</span>
                                    </label>
                                    <div className='grid grid-cols-2 gap-2 '><input type="text" placeholder="min" name='min' className="input input-bordered" required />
                                        <input type="text" placeholder="max" name='max' className="input input-bordered" required /></div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary Currency</span>
                                    </label>
                                    <select defaultValue='Select Currency' name="currency" className="select select-bordered w-full max-w-md">
                                        <option disabled >Select Currency</option>
                                        <option>USD</option>
                                        <option>BDT</option>
                                        <option>IRS</option>
                                        <option>AD</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Logo</span>
                                </label>
                                <input type="url" placeholder="url" name='company_logo' className="input input-bordered" required />
                            </div>
                        </div>

                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input type="text" placeholder="company" name='company' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Requirements</span>
                                </label>
                                <textarea name='requirements'
                                    placeholder="each requirements in a new line"
                                    className="textarea textarea-bordered w-full max-w-lg" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Responsibilities</span>
                                </label>
                                <textarea name='responsibilities'
                                    placeholder="each responsibilities in a new line"
                                    className="textarea textarea-bordered w-full max-w-lg" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">HR Name</span>
                                </label>
                                <input defaultValue={user?.displayName} type="text" placeholder="name" name='hr_name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">HR Email</span>
                                </label>
                                <input defaultValue={user?.email} type="email" placeholder="email" name='hr_email' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='description'
                                    placeholder="description"
                                    className="textarea textarea-bordered textarea-md w-full max-w-lg" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input  type="date" placeholder="" name='applicationDeadline' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline bg-sky-300 border-none">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;