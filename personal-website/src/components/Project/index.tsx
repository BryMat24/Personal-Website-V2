import React, { FunctionComponent } from "react";
import SectionHeading from "../sectionHeading";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
    return (
        <section className="bg-black px-8 py-4 pb-24 mt-7 flex flex-col">
            <div className="md:w-auto md:m-0 lg:w-3/4 lg:m-auto">
                <SectionHeading title="Projects" type="left" />
            </div>
            <div
                className="flex flex-col my-12 duration-700 md:flex-col md:m-0 lg:mt-16 lg:w-7/12 lg:m-auto lg:flex-row lg:mb-32"
                style={{ transform: "translateY(-108.055px) translateZ(0px)" }}
            >
                <div className="flex flex-col mb-4 md:w-3/5 md:m-auto md:mt-20 lg:w-10/12 lg:flex-shrink-0 lg:mt-0 lg:mr-12 lg:mb-0">
                    <button
                        aria-label="Visit project's website"
                        className="mb-2 md:my-2"
                    >
                        <div className="flex flex-col my-2 md:mt-4">
                            <div className="lazyload-wrapper">
                                <img
                                    className="self-start m-auto project-fallback"
                                    alt="Screenshot of current project"
                                    src="ShareMySight.png"
                                />
                            </div>
                        </div>
                    </button>
                    <div className="flex justify-center w-full max-w-sm self-center lg:max-w-none">
                        <a
                            aria-label="Visit repository on GitHub"
                            href="https://github.com/randrerd/hacemos-tu-sociedad"
                            target="_blank"
                            rel="noreferrer"
                            className="w-auto flex-grow h-8 bg-white mx-2 max flex flex-col justify-center items-center lg:w-24 lg:h-8 lg:flex-grow-0"
                        >
                            Code
                        </a>
                        <a
                            aria-label="Visit project's website"
                            href="https://hacemostusociedad.com.ar"
                            target="_blank"
                            rel="noreferrer"
                            className="w-auto flex-grow h-8 bg-white mx-2 max flex flex-col justify-center items-center lg:w-24 lg:h-8 lg:flex-grow-0"
                        >
                            Live
                        </a>
                    </div>
                    <div className="relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40"></div>
                </div>
            </div>
        </section>
    );
};

export default Project;
