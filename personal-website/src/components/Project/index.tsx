import React, { FunctionComponent } from "react";
import SectionHeading from "../sectionHeading";
import ProjectDisplay from "./project";

const Project: FunctionComponent = () => {
    return (
        <section className="flex flex-col mx-8 my-4 mt-7 bg-dark-bg duration-700 md:w-9/12 md:m-auto">
            <div className="flex my-5 mb-3 lg:mt-0 overflow-hidden bg-dark-bg duration-700 relative py-2">
                <SectionHeading title="Projects" type="left" />
            </div>
            <div>
                <ProjectDisplay
                    title="ShareMySight"
                    description="An application crafted to support individuals with visual impairments by connecting them with volunteers and integrating OpenAI ChatBot for image-to-text communication."
                    imageUrl="ShareMySight.png"
                />
                <ProjectDisplay
                    title="ShareMySight"
                    description="An application designed to bridge the gap between visually
                    impaired individuals and volunteers who are eager to assist.
                    The app leverages voice calls, chat assistance, and a
                    generative AI to assist them."
                    imageUrl="ShareMySight.png"
                />
            </div>
        </section>
    );
};

export default Project;
