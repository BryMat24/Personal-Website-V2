import React, { FunctionComponent } from "react";
import SectionHeading from "../sectionHeading";
import ProjectDisplay from "./project";

interface projectData {
    title: string;
    description: string;
    imageUrl: string;
}

const Project: FunctionComponent = () => {
    const projectData = require("../../data/project.json");

    return (
        <section className="flex flex-col duration-700 md:w-9/12 md:m-auto md:mt-[180px] px-8">
            <div className="flex my-5 mb-3 lg:mt-0 overflow-hidden bg-dark-bg duration-700 relative py-2">
                <SectionHeading title="Projects" type="left" />
            </div>
            <div className="mt-8">
                {projectData.map((el: projectData, index: number) => (
                    <ProjectDisplay
                        title={el.title}
                        description={el.description}
                        imageUrl={el.imageUrl}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;
