import { FaCalendarAlt, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdNearMe, MdTitle } from "react-icons/md";
import { PiBowlSteam } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    
    const { title, location, company_logo, hr_email ,company, jobType, applicationDeadline, requirements, category, hr_name, description, salaryRange, _id,responsibilities } = job

    return (
        <div className="border border-black max-w-4xl mx-auto bg-sky-300 rounded-md m-16">
            <div className="flex justify-between items-center px-20">
            <h1 className="text-center text-4xl  my-6 font-semibold"><span className="text-sky-600">Apply</span> Your Favourite <span className="text-sky-600">JOB</span></h1>
            <Link to={`/jobapply/${_id}`}><button className="btn btn-neutral border-none">Job Apply</button></Link>
            </div>
            <div className='flex justify-between p-10  '>
                <div className="space-y-4">
                    <div className="flex items-start gap-10">
                        <img src={company_logo} className="w-28" alt="" />
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><HiOutlineBuildingOffice2></HiOutlineBuildingOffice2> Industry :</p>
                        <p className="text-xl font-medium">{company}</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><RiMoneyDollarBoxLine></RiMoneyDollarBoxLine> Salary :</p>
                        <p className="text-xl font-medium">{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><PiBowlSteam></PiBowlSteam> Job type :</p>
                        <p className="text-xl font-medium">{jobType}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><HiOutlineBuildingOffice2></HiOutlineBuildingOffice2> Category :</p>
                        <p className="text-xl font-medium">{category}</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><FaLocationDot></FaLocationDot>  Locaton :</p>
                        <p className="text-xl font-medium">{location}</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><MdTitle></MdTitle> Job Title :</p>
                        <p className="text-xl font-medium">{title}</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><FaCalendarAlt></FaCalendarAlt> Deadline :</p>
                        <p className="text-xl font-medium">{applicationDeadline}</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><MdNearMe></MdNearMe> HR Name :</p>
                        <p className="text-xl font-medium">{hr_name}</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <p className="text-xl flex items-center gap-1"><FaMailBulk></FaMailBulk> HR Email :</p>
                        <p className="text-xl font-medium">{hr_email}</p>
                    </div>
                </div>
            </div>
            
            <div className="p-10 border-t border-t-black">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-xl font-semibold">Requirements</h1>
                        {
                            requirements.map((r, index) => <li className="text-lg list-decimal font-medium" key={index}>{r}</li>)
                        }
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Responsibilities</h1>
                        {
                            responsibilities.map((r, index) => <li className="text-lg list-decimal font-medium" key={index}>{r}</li>)
                        }
                    </div>
                </div>
                <p className="mt-2"><span className="text-xl font-semibold">Description</span> : {description}</p>
            </div>
        </div>
    );
};

export default JobDetails;