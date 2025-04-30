import React from "react";


function ClassicTemplate({data}){
    const {fullName, jobTitle, experience, skills} = data;

    return (
        <div className="text-white font-sans space-y-4">
          <div className="border-b border-gray-600 pb-2">
            <h1 className="text-3xl font-bold">{fullName || "Your Name"}</h1>
            <h2 className="text-lg text-gray-400">{jobTitle || "Job Title"}</h2>
          </div>
    
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-1">Experience</h3>
            <p className="text-gray-300 whitespace-pre-line">
              {experience || "Describe your work experience here..."}
            </p>
          </div>
    
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-1">Skills</h3>
            <ul className="list-disc list-inside text-gray-300">
              {(skills ? skills.split(",") : ["Skill 1", "Skill 2"]).map((skill, index) => (
                <li key={index}>{skill.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default ClassicTemplate;