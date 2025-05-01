import React from "react";

const templates = ['classic', 'modern', 'elegant'];

function TemplateSelector({selected, setSelected}){

    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Select a template: </label>
            <div>
                {
                    templates.map(template => (
                        <button
                            key={template}
                            onClick={() => setSelected(template)}
                            className={`m-2 px-4 py-2 rounded-md text-sm font-semibold transition ${selected === template ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
                        >
                            {template.charAt(0).toUpperCase() + template.slice(1)}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default TemplateSelector;