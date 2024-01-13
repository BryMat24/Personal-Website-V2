import React, { useContext } from "react";
import SectionHeading from "../sectionHeading";
import Paragraph from "./paragraph";
import Subheading from "./subHeading";

export default function About() {
    return (
        <section className="flex flex-col mx-8 my-4 mt-7 bg-dark-bg duration-700 md:w-9/12 md:m-auto">
            <SectionHeading title="About Me" type="right" />
            <div className="flex flex-col my-4 md:m-auto md:mt-12 lg:mb-0 lg:w-7/12">
                <div>
                    <Subheading title="Education & Summary" />
                    <Paragraph>
                        "Hi There! My name is Bryan Matthew Rustardy and I'm
                        currently a sophomore at{" "}
                        <span className="bg-white text-black p-1">
                            Nanyang Technological University
                        </span>{" "}
                        (NTU), majoring in Information Engineering."
                    </Paragraph>
                    <Paragraph>
                        I love to code and explore the world of web development,
                        ranging from frontend, backend and recently Devops"
                    </Paragraph>
                </div>

                <div>
                    <Subheading title="Experience" />
                    <Paragraph>
                        I am currently undergoing my winter internship in{" "}
                        <span className="text-black bg-white p-1 mx-1">
                            Astra Financial Indonesia
                        </span>{" "}
                        as a software engineering intern where I am asked to
                        help revamp the Frontend of the company's career page
                        using React and manage the server of internal app using
                        <span className="text-black bg-white p-1 mx-1">
                            Spring Boot
                        </span>
                    </Paragraph>
                </div>

                <div>
                    <Subheading title="Skills" />
                    <ul
                        style={{ transform: "translateY(-64.5044px)" }}
                        className="my-2 text-lg"
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
                            <b>Others</b>: Git, Docker, AWS
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
