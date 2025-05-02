import { useState } from "react";
import Form from "../components/Form";
import Preview from "../components/Preview";
import TemplateSelector from "../components/TemplateSelector";

function Home() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    jobTitle: "",
    summary: "",
    email: "",
    github: "",
    experience: "",
    skills: "",
    education: ""
  });

  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <div className="space-y-6">
        <TemplateSelector
          selected={selectedTemplate}
          setSelected={setSelectedTemplate}
        />
        <Form
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </div>

      <Preview
        resumeData={resumeData}
        selectedTemplate={selectedTemplate}
      />
    </div>
  );
}

export default Home;