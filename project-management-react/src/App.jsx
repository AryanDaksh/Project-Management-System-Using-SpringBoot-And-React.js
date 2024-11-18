// noinspection ConstantConditionalExpressionJS

import './App.css'
import Home from "@/pages/Home/Home.jsx";
import Navbar from "@/pages/Navbar/Navbar.jsx";
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from "@/pages/ProjectDetails/ProjectDetails.jsx";
import IssueDetails from "@/pages/IssueDetails/IssueDetails.jsx";
import Subscription from "@/pages/Subscription/Subscription.jsx";
import Auth from "@/pages/Auth/Auth.jsx";

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
