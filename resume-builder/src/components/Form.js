import React from "react";


function Form({resumeData, setResumeData}){

    const handleChange = (e) => {
        const {name, value} = e.target;
        setResumeData((prev) => ({
            ...prev, [name]: value,
        }))
    };

    return (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={resumeData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
    
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={resumeData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
            </label>
            <input
              type="email"
              name="email"
              value={resumeData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label 
                className="block text-sm font-medium text-gray-300 mb-1"
            >
                Github
            </label>
            <input 
                type="text"
                name="github"
                value={resumeData.github}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label 
            className="block text-sm font-medium text-gray-300 mb-1"
            >
                Summary
            </label>
            <input 
                name="summary"
                rows="3"
                value={resumeData.summary}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Experience
            </label>
            <textarea
              name="experience"
              rows="4"
              value={resumeData.experience}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
    
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              name="skills"
              value={resumeData.skills}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </form>
    );
}

export default Form;