import './App.css'
import Home from "@/pages/Home/Home.jsx";
import Navbar from "@/pages/Navbar/Navbar.jsx";
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from "@/pages/ProjectDetails/ProjectDetails.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/project/:id" element={<ProjectDetails/>}/>
            </Routes>
        </>
    )
}

export default App;
