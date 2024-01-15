"use client";

import React, { FunctionComponent, useContext } from "react";
import SectionHeading from "../sectionHeading";
import ProjectDisplay from "./project";
import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
//Import animations
import { containerVariants } from "../../animation";
import { ThemeContext } from "@/context/ThemeContext";

interface projectData {
    title: string;
    description: string;
    imageUrl: string;
    codeLink: string;
    liveLink?: string;
}

const Project: FunctionComponent = () => {
    const threshold = [0.07, 0];
    const [element, controls] = useScroll(threshold);
    const projectData = require("../../data/project.json");

    return (
        <div className={`bg-dark`}>
            <motion.section
                initial="hidden"
                animate={controls}
                ref={element}
                variants={containerVariants}
                className="flex flex-col duration-700 md:w-9/12 md:m-auto md:pt-[50px] md:px-0 px-[50px]"
            >
                <div className="flex my-5 mb-3 lg:mt-0 overflow-hidden bg-dark-bg duration-700 relative py-2">
                    <SectionHeading title="Projects" type="left" />
                </div>
                <div className="mt-8">
                    {projectData.map((el: projectData, index: number) => (
                        <ProjectDisplay
                            title={el.title}
                            description={el.description}
                            imageUrl={el.imageUrl}
                            codeLink={el.codeLink}
                            liveLink={el?.liveLink}
                            key={index}
                        />
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Project;
