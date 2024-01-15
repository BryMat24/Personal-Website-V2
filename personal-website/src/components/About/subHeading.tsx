"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { FunctionComponent, useContext } from "react";

interface Props {
    title: string;
}

const Subheading: FunctionComponent<Props> = ({ title }) => {
    const subheadingStyle = {
        transform: "translateY(-64.5044px)",
    };
    const { theme } = useContext(ThemeContext);

    return (
        <h4
            className={`mt-8 duration-700 lg:text-2xl about-heading ${
                theme === "light" ? "text-dark light" : "text-light"
            }`}
            style={subheadingStyle}
        >
            {title}
        </h4>
    );
};

export default Subheading;
