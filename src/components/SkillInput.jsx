import {useState} from "react"
import {
    FaBrain,
   
}from "react-icons/fa";
import { X ,Trash2} from "lucide-react";
function SkillInput(){
    const [skill,setSkill]=useState("");
    const [skills,setSkills]=useState([]);

    function addSkills(){
         if(skill.trim()==="") return
         setSkills([...skills,skill]);
         setSkill("");
    }

    function deleteSkill(indexToDelete){
            setSkills(
                skills.filter((_,index)=> index !== indexToDelete)
            )
    }

    function clearAll(){
        setSkills([]);
    }
    return (

        <div className="h-full border border-slate-200 rounded-xl p-5 overflow-hidden hover:shadow-md transition">
        <div >
          <div className="flex gap-5">
              <FaBrain className="text-purple-500 text-4xl"/>
             <div >
                <h1 className="font-bold text-2xl">Add Skill</h1>
                <p className="text-gray-400 text-sm">Add your current skill to build a personslized learning path</p>
              </div>
          </div>
          <div className=" mt-4">
            <input 
               value={skill}
               onChange={(event)=>setSkill(event.target.value)}
               placeholder="enter a skill"
               className="flex-1 border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-violet-400"/>
               <button onClick={addSkills}
               className="ml-2 px-4 py-2 bg-violet-700 text-white rounded-lg font-medium"
               >+ Add Skill</button>

         </div>
        </div>
        
        <div className="mt-2">
          <h1 className="font-semibold text-xl">Your skills:</h1>
        
        <div className="mt-4 flex flex-wrap gap-4">
            {skills.map((skill,index)=>(
                <div 
                key={index} 
                className="flex items-center gap-3 mt-2 bg-purple-200 rounded-xl px-2 py-2">
                    <span className="text-violet-600 font-medium">
                        {skill}</span>
                    <button onClick={()=>deleteSkill(index)}>
                        <X size={16} className="text-violet-600 font-semibold"/>
                    </button>
                    </div>
                ))}
         <div className="flex justify-end mt-4">
            <button onClick={clearAll}className="flex font-medium items-center gap-2  ">
            <Trash2 size={18}/>
            <span>clear all</span>
            </button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default SkillInput;