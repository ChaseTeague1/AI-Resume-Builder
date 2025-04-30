import React from "react";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";

function Preview({selectedTemplate, resumeData}){

    const renderTemplate = () => {
        switch (selectedTemplate) {
          case "classic":
            return <ClassicTemplate data={resumeData} />;
          case "modern":
            return <ModernTemplate data={resumeData}/>
          default:
            return <p className="text-gray-400">Template not found.</p>;
        }
      };

    return (
        <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl w-full max-w-3xl min-h-[400px]">
          {renderTemplate()}
        </div>
      );
}

export default Preview;