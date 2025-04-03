import {Route, Routes} from "react-router";
import {Home} from "@/pages/Home";
import {About} from "@/pages/About";
import { Project } from "@/pages/Project";

export function BaseRoutes(){
return (
    <>
        <Routes>
            {/* Public Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    </>
);
}