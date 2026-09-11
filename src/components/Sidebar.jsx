import {
    FaCode,
    FaHome,
    FaGraduationCap,
    FaFolder,
    FaChartLine,
    FaCog,
    FaRocket
} from "react-icons/fa"

import {
    Code2,
    Home,
    GraduationCap,
    Folder,
    ChartNoAxesColumnIncreasing,
    Settings,
    Rocket
}from "lucide-react";

function Sidebar(){
    return(
        <aside className="fixed left-0 top-0 w-54  min-h-screen bg-gray-900 text-white p-6 rounded-xs flex flex-col">
         <div className="flex items-center gap-2 mb-8 px-1">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#7848F8] to-[#5428e9] flex items-center justify-center [clip-path:polygon(20%_0%,80%_0%,100%_50%,80%_100%,20%_100%,0%_50%)]">
                <FaCode className="text-lg" />
                </div>
            <h2 className="text-medium font-semibold leading-tight">
                
                Skill-to-Project <br/>Builder
            </h2>
            </div>
            <nav className="flex flex-col gap-3">
                <a href='#'
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:bg-[#5b2df5] text-sm font-medium"><Home size={20}/><span>Dashboard</span>
                </a>
               <a href='#'
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:bg-[#5b2df5] text-sm font-medium"><GraduationCap size={20}/><span>Skills</span>
                </a>
                <a href='#'
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:bg-[#5b2df5] text-sm font-medium"><Folder size={20}/><span>Projects</span>
                </a>
                <a href='#'
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:bg-[#5b2df5] text-sm font-medium"><ChartNoAxesColumnIncreasing size={20}/><span>Progress</span>
                </a>
                <a href='#'
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:bg-[#5b2df5] text-sm font-medium"><Settings size={20}/><span>Settings</span>
                </a>
            </nav>

            <div className="mt-auto bg-gradient-to-b from-[#4b22d8] to-[#30188F] rounded-xl p-4 text-center">
                
                    <Rocket size={24} className="text-2xl mx-auto mb-3"/>
                    <p className ="text-sm font-semibold leading-4 mb-3">
                        Build real world
                        <br/>
                        projects from your
                        <br/>
                        skills
                    </p>

                    <button className="w-full bg-[#5b2df5] text-white text-xs font-semibold py-2 rounded-lg hover:bg-gray 100 transition">
                        Get Started
                    </button>
               
            </div>
            
        </aside>
    )
}
export default Sidebar