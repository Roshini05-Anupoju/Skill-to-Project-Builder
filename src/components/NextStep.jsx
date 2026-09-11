import { FaCheck } from "react-icons/fa";

function NextStep() {
    return (
        <div className="border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                    Next Steps
                </h2>

                <button className="text-purple-600 font-medium">
                    View All →
                </button>
            </div>

            <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3">
                    <FaCheck className="text-purple-600" />
                    <span>Learn React basics</span>
                </div>

                <div className="flex items-center gap-3">
                    <FaCheck className="text-purple-600" />
                    <span>Build Add Skill feature</span>
                </div>

                <div className="flex items-center gap-3">
                    <FaCheck className="text-purple-600" />
                    <span>Create first project</span>
                </div>
            </div>
        </div>
    );
}

export default NextStep;