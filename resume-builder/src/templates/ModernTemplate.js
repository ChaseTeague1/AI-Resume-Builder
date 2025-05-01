import React from "react";


function ModernTemplate({data}){
    const {fullName, jobTitle, experience, skill, email, github, summary} = data

    return (
        <div>
            <div>
                <h1>{fullName || "Your Name"}</h1>
                <h2>{jobTitle || "Job Title"}</h2>
            </div>
            <div>
                <h1>Contact</h1>
                <p>{email || "Email"}</p>
                <p>
                    {github ? (
                        <a>{`github.com/${github}`}</a>
                    ) : (
                        "Github"
                    )}
                </p>
            </div>
        </div>
    )
}

export default ModernTemplate;