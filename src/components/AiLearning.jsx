import { MdAutoAwesome } from "react-icons/md";
import robo from"../assets/robo.png";
function AiLearning(){
    return(
        <div className=" border border-slate-200 rounded-xl p-5 overflow-hidden hover:shadow-md transition mt-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MdAutoAwesome className="text-purple-400 text-2xl "/>
              <h1 className="text-2xl font-bold">AI Learning</h1>
            </div>
            <MdAutoAwesome className="text-yellow-500 text-xl"/>
           </div>
           <div className="flex items-center gap-4 mt-4">
            <img src={robo} alt="AI robot" className="w-32"/>
           <div className="flex-1 border border-purple-100 bg-purple-100 rounded-xl ">            
              <h1 className="text-purple-700 font-medium p-3">
                "Focus on one skill at the time.Build a small project with it.That's how you grow fast."
              </h1>               
           </div>
           </div>
        </div>
    )
}
export default AiLearning;