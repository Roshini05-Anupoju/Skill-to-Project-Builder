import StatCard from "../components/StatCard";
import SkillInput from "../components/SkillInput"
import Projects from "../components/Projects"
import ProgressTracker from "../components/ProgressTracker"
import AiLearning from "../components/AiLearning"
import NextStep from "../components/NextStep";
import {
    FaGraduationCap,
    FaFolder,
    FaChartLine
}from "react-icons/fa";
function Dashboard(){

    return(
        <div className="w-full">
       <div className="flex justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold text-purple-900">
                👋Welcome...!
            </h1>
            <p className="mt-2 text-gray-600">
                Track your skills and build better projects. Learn. Build. Improve.
                
            </p>
        </div>

        <div className="w-100 rounded-2xl bg-violet-100 p-5">
          <p className="font-bold text-slate-900">
            🎯 Goal: Become a Full Stack Developer
          </p>
        
          <div className="mt-4 flex items-center gap-3">
            <div className="h-3 flex-1 rounded-full bg-violet-200">
              <div className="h-3 w-2/3 rounded-full bg-violet-600">
              </div>
            </div>

            <span className="font-semibold">
              66% complete
            </span>
          </div>
     </div>
        </div>
           
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                <div className=" flex bg-white rounded-xl p-5 border border-gray-200 gap-2">
                    <div className="bg-purple-100 rounded-xl px-2 py-1 w-12 h-12 items-center">
                    < FaGraduationCap className="text-purple-500 text-4xl"/>
                    </div>
                    <div className="flex-col">
                    <p className="text-gray-500 text-medium">Skills</p>
                    <p className="text-black font-bold">12</p>
                    </div>
                </div>
                <div className=" flex bg-white rounded-xl p-5 border border-gray-200 gap-2">
                    <div className="bg-purple-100 rounded-xl px-2 py-1 w-12 h-12 items-center">
                    < FaFolder className="text-purple-500 text-4xl"/>
                    </div>
                    <div className="flex-col">
                    <p className="text-gray-500 text-medium">Projects</p>
                    <p className="text-black font-bold">5</p>
                    </div>
                </div>
               

                <div className=" flex bg-white rounded-xl p-5 border border-gray-200 gap-2">
                    <div className="bg-purple-100 rounded-xl px-2 py-1 w-12 h-12 items-center">
                    < FaChartLine className="text-purple-500 text-4xl"/>
                    </div>
                    <div className="flex-col">
                    <p className="text-gray-500 text-medium">Progress</p>
                    <p className="text-black font-bold">68%</p>
                    </div>
                </div>

                
             
            </div>
        
         <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 mt-8">
            <div className="lg:cols-span-2 ">
                <SkillInput/>
            </div>
           
             <div className="lg:row-span-2 ">
                <ProgressTracker/>
             </div>
           

          </div>  

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
    
                <div className="lg:col-span-2">
                    <Projects />
                </div>

                <div className="space-y-6">
                    <AiLearning />
                    <NextStep />
                </div>

        </div>

        </div>
     
        
    )
}
export default Dashboard;