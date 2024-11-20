// noinspection ConstantConditionalExpressionJS

import './App.css'
import Home from "@/Pages/Home/Home.jsx";
import Navbar from "@/Pages/Navbar/Navbar.jsx";
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from "@/Pages/ProjectDetails/ProjectDetails.jsx";
import IssueDetails from "@/Pages/IssueDetails/IssueDetails.jsx";
import Subscription from "@/Pages/Subscription/Subscription.jsx";
import Auth from "@/Pages/Auth/Auth.jsx";

function App() {

    return (
        <>
            {
                false ?
                    <div>
                        <Navbar/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/project/:id" element={<ProjectDetails/>}/>
                            <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails/>}/>
                            <Route path="/upgrade_plan" element={<Subscription/>}/>
                        </Routes>
                    </div>
                    : <Auth/>
            }
        </>
    )
}

export default App;
