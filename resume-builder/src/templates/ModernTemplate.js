import React from "react";


function ModernTemplate({data}){
    const {fullName, jobTitle, experience, skill} = data

    return (
        <div>
            <div>
                <h1>{fullName || "Your Name"}</h1>
                <h2>{jobTitle || "Job Title"}</h2>
            </div>
        </div>
    )
}

export default ModernTemplate;