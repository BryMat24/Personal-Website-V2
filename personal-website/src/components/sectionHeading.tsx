import React, { FunctionComponent } from "react";

interface Props {
    title: string;
}

const SectionHeading: FunctionComponent<Props> = ({ title }) => {
    return (
        <div
            className="flex my-5 mb-3 lg:mt-0 overflow-hidden bg-dark-bg duration-700 relative"
            style={{ opacity: 1 }}
        >
            <h3
                className="relative text-white z-20 mix-blend-difference lg:text-5xl"
                style={{ opacity: 1, transform: "none", color: "white" }}
            >
                {title}
            </h3>
            <div
                className="relative top-0 self-end right-8 lg:right-13 w-16 lg:h-10 bg-white"
                style={{ opacity: 1, transform: "none" }}
            ></div>
        </div>
    );
};

export default SectionHeading;
