import {
    Bell,
    Moon,
    
} from "lucide-react";
function Navbar(){
    return(
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 ">
            
                <input
                   type="text"
                   placeholder="search skills,projects,guides..."
                   
                   className="w-100 px-5 py-2 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-violet-400"
                   />
             <div className="flex gap-2 items-center">
                <div className="flex items-center gap-3">
                    <button >
                        <Bell size={20} className="text-xl text-gray-600"/>
                    </button>
                    <button >
                        <Moon size={20} className="text-xl text-gray-600"/>
                    </button>
                 </div>
                    <div className="flex items-center gap-2 ">
                        <div className="w-9 h-9 rounded-full bg-viloet-100 flex items-center justify-cenetr bg-gray-300 px-2 ">
                            👤
                        </div>
                        <div >
                            <p className="font-semibold text-Black-900">Hi, Learner!</p>
                            <p className="text-sm text-gray-400">Build,Learn,Grow.</p>
                        </div>
                    </div>
             </div>
           

            
        </header>
    )
}
export default Navbar