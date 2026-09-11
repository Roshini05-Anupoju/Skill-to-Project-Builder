import { FaTrophy ,
        FaArrowRight,
        FaReact,
} from "react-icons/fa6";


function ProgressTracker(){
    function viewAll(){
        console.log("all");
    }
    return(
        <div>
            <div className="h-full border border-slate-200 rounded-xl p-5 overflow-hidden hover:shadow-md transition">
                <div className="flex items-center justify-between ">
                <div className="flex gap-5">
                <FaTrophy className="text-purple-500 text-4xl"/>
                
                <h1 className="text-2xl font-bold">Progress Tracker</h1>
                </div>
                <button className="flex text-purple-500 text-medium gap-1 font-semibold" onClick={viewAll}>
                    <span >View all</span>
                    <FaArrowRight className="mt-1"/>
                    </button>
                  </div>
                    <div className="mt-6 flex items-center gap-3">
                        <FaReact className="text-xl text-purple-400"/>
                        <div className="flex flex-1 items-center gap-2 ">
                            <h1 className="font-medium ">React</h1>
                            <div className="h-4 flex-1 rounded-full bg-violet-200  ">
                                <div className="h-4 w-2/3 rounded-full bg-violet-500  ">
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                        <FaReact className="text-xl text-purple-400"/>
                        <div className="flex flex-1 items-center gap-2 ">
                            <h1 className="font-medium ">React</h1>
                            <div className="h-4 flex-1 rounded-full bg-violet-200  ">
                                <div className="h-4 w-2/3 rounded-full bg-violet-500  ">
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <FaReact className="text-xl text-purple-400"/>
                        <div className="flex flex-1 items-center gap-2 ">
                            <h1 className="font-medium ">React</h1>
                            <div className="h-4 flex-1 rounded-full bg-violet-200  ">
                                <div className="h-4 w-2/3 rounded-full bg-violet-500  ">
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                        <FaReact className="text-xl text-purple-400"/>
                        <div className="flex flex-1 items-center gap-2 ">
                            <h1 className="font-medium ">React</h1>
                            <div className="h-4 flex-1 rounded-full bg-violet-200  ">
                                <div className="h-4 w-2/3 rounded-full bg-violet-500  ">
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
            </div>
        
    )
}
export default ProgressTracker;