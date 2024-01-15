"use client";
import React, { FunctionComponent, useContext } from "react";
import { motion } from "framer-motion";

//Import animation variants
import {
    textVariants,
    containerVariants,
    subheadingVariants,
} from "@/animation";
import { ThemeContext } from "@/context/ThemeContext";

interface Props {
    title: string;
    type: "right" | "left";
}

const SectionHeading: FunctionComponent<Props> = ({ title, type }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            variants={containerVariants}
            className="flex my-5 mb-3 lg:mt-0 overflow-hidden bg-dark-bg duration-700 relative py-2"
            style={{ opacity: 1 }}
        >
            <motion.h3
                variants={textVariants}
                className={`relative z-20 text-white mix-blend-difference md:text-4xl lg:text-5xl`}
                style={{ opacity: 1, transform: "none" }}
            >
                {title}
            </motion.h3>
            {type == "right" ? (
                <motion.div
                    variants={subheadingVariants.leftToRight}
                    className={`relative self-end right-[50px] lg:right-13 w-16 h-8 lg:h-12 translate-y-2 ${
                        theme === "light" ? "bg-dark" : "bg-light"
                    }`}
                    style={{ opacity: 1 }}
                ></motion.div>
            ) : (
                <motion.div
                    variants={subheadingVariants.rightToLeft}
                    className={`absolute self-center mr-auto w-16 h-8 lg:h-12 bg-light`}
                    style={{ opacity: 1, transform: "none" }}
                ></motion.div>
            )}
        </motion.div>
    );
};

export default SectionHeading;
