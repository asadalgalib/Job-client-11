import { createBrowserRouter } from "react-router-dom";
import MainLyaout from "../Pages/Layout/MainLyaout";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApply from "../Pages/MyAppy/MyApply";
import AddJob from "../Pages/AddJob/AddJob";
import MyPosted from "../Pages/MyPostedJobs/MyPosted";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLyaout></MainLyaout>,
        errorElement: <h1>Route Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobapply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/addjob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/myposted',
                element: <PrivateRoute><MyPosted></MyPosted></PrivateRoute>
            },
            {
                path: '/myapply',
                element: <PrivateRoute><MyApply></MyApply></PrivateRoute>
            }
        ]
    },
]);

export default router;