import { MdAutoAwesome } from "react-icons/md"
import { FaArrowRight } from "react-icons/fa"

function Projects() {

  const projects = [
    {
      title: "Expense Tracker",
      description: "Build a full-stack expense tracking app.",
      skills: ["React", "Node.js", "MongoDB"],
      time: "4-6 hours"
    },
    {
      title: "Weather App",
      description: "Build a real-time weather application.",
      skills: ["React", "OpenWeather API"],
      time: "3-5 hours"
    },
    {
      title: "AI Chatbot",
      description: "Build an AI-powered chat assistant.",
      skills: ["Node.js", "OpenAI API"],
      time: "6-8 hours"
    }
  ]

  function viewAll() {
    console.log("View all projects")
  }

  return (
    <div className="h-full border border-slate-200 rounded-xl p-5">
  
      <div className="flex justify-between p-4">

        <div className="flex gap-2 items-center">
          <MdAutoAwesome className="text-purple-500 text-3xl" />

          <h1 className="text-2xl font-bold">
            Recommended Projects
          </h1>
        </div>

        <button
          onClick={viewAll}
          className="flex items-center text-purple-500 font-semibold gap-2"
        >
          <span>View All</span>
          <FaArrowRight />
        </button>

      </div>


      
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">

        {projects.map((project) => (

          <div
            key={project.title}
            className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition"
          >

            {/* Image */}
            <div className="h-32 bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center">
              <span className="text-5xl">
                💻
              </span>
            </div>


            {/* Content */}
            <div className="p-4">

              <h3 className="text-lg font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>


              {/* Skills */}
              <div className="mt-3 flex flex-wrap gap-2">

                {project.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700"
                  >
                    {skill}
                  </span>

                ))}

              </div>


              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  🕐 {project.time}
                </span>

                <button className="rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-700">
                  Start Project
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Projects