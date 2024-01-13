import React, { FunctionComponent } from "react";

interface Props {
    title: string;
    type: "right" | "left";
}

const SectionHeading: FunctionComponent<Props> = ({ title, type }) => {
    return (
        <div
            className="flex my-5 mb-3 lg:mt-0 overflow-hidden bg-dark-bg duration-700 relative py-2"
            style={{ opacity: 1 }}
        >
            <h3
                className="relative text-white z-20 mix-blend-difference lg:text-5xl"
                style={{ opacity: 1, transform: "none", color: "white" }}
            >
                {title}
            </h3>
            {type == "right" ? (
                <div
                    className="relative self-end right-[50px] lg:right-13 w-16 h-8 lg:h-12 bg-white translate-y-2"
                    style={{ opacity: 1 }}
                ></div>
            ) : (
                <div
                    className="absolute self-center mr-auto w-16 h-8 lg:h-12 bg-white"
                    style={{ opacity: 1, transform: "none" }}
                ></div>
            )}
        </div>
    );
};

export default SectionHeading;
