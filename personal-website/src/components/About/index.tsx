"use client";

import React from "react";
import SectionHeading from "../sectionHeading";
import Paragraph from "./paragraph";
import Subheading from "./subHeading";
import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import { containerVariants } from "../../animation";
import { strongWordsVariants } from "@/animation";

const Highlight = ({ children }: { children: any }) => (
    <motion.strong
        variants={strongWordsVariants}
        className="text-black bg-white px-1 mx-1 inline-block font-medium"
    >
        {children}
    </motion.strong>
);

export default function About() {
    const [element, controls] = useScroll();

    return (
        <motion.section
            exit="hidden"
            initial="hidden"
            animate={controls}
            ref={element}
            variants={containerVariants}
            className="flex flex-col mx-8 my-4 mt-7 bg-dark-bg duration-700 md:w-9/12 md:m-auto"
        >
            <SectionHeading title="About Me" type="right" />
            <div className="flex flex-col my-4 md:m-auto md:mt-12 lg:mb-0 lg:w-8/12">
                <div className="about-section">
                    <Subheading title="Summary" />
                    <Paragraph>
                        I love to code and explore the world of web development,
                        ranging from frontend, backend and recently Devops
                    </Paragraph>
                </div>

                <div className="about-section">
                    <Subheading title="Experience" />
                    <Paragraph>
                        I am currently undergoing my winter internship in{" "}
                        <Highlight>Astra Financial Indonesia</Highlight>
                        as a software engineering intern where I am asked to
                        help revamp the Frontend of the company's career page
                        using React and manage the server of internal app using{" "}
                        <Highlight>Spring Boot</Highlight>
                    </Paragraph>
                </div>

                <div className="about-section">
                    <Subheading title="Education" />
                    <Paragraph>
                        Hi There! My name is Bryan Matthew Rustardy and I'm
                        currently a sophomore at{" "}
                        <Highlight>Nanyang Technological University</Highlight>
                        (NTU), majoring in Information Engineering.
                    </Paragraph>
                    <Paragraph>
                        Relevant Courseworks: Object-Oriented Programming, Data
                        Structures and Algorithm, Intro to Data Science &
                        Artificial Intelligence, Software Engineering, Computer
                        Communication, Intro to Design & Project, Design &
                        Innovation Project
                    </Paragraph>
                    <Paragraph>
                        Achievements: Dean’s List AY 2022 - 2023 (top 5% CGPA)
                    </Paragraph>
                </div>

                <div className="about-section h-[110px]">
                    <Subheading title="Skills" />
                    <ul
                        style={{ transform: "translateY(-64.5044px)" }}
                        className="mt-2 text-lg"
                    >
                        <li>
                            <b>Front End</b>: HTML, CSS, Typescript, Javascript,
                            Next, React, Vue
                        </li>
                        <li>
                            <b>Back End</b>: NodeJS, PostgreSQL, Express JS,
                            Spring Framework
                        </li>
                        <li>
                            <b>Others</b>: Git, Docker, AWS, python
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}
