"use client";
import { FunctionComponent, useContext } from "react";
import Header from "./header";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "@/animation";
import { ThemeContext } from "@/context/ThemeContext";

const Hero: FunctionComponent = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`relative ${
                theme === "light" ? "bg-light" : "bg-dark"
            } duration-700`}
            style={{ border: "1px solid rgba(255, 255, 255, 0)" }}
        >
            <motion.div
                variants={containerVariants}
                animate="show"
                initial="hidden"
                className="mx-8 min-h-12 md:w-9/12 md:m-auto lg:mt-8 my-4 lg:mb-0 lg:min-h-screen xxl:min-h-0 xxl:mb-12"
            >
                <Header />
                <div className="flex flex-col w-10/12 lg:w-7/12 lg:mt-5 relative">
                    <div className="overflow-hidden mb-6 lg:text-7xl w-min">
                        <motion.h1
                            variants={textVariants}
                            className={`lg:text-8xl md:text-7xl block font-semibold sm:text-6xl text-[50px] ${
                                theme === "light" ? "text-dark" : "text-light"
                            }`}
                            style={{ lineHeight: 1.15 }}
                        >
                            Bryan M Rustardy
                        </motion.h1>
                    </div>
                    <div>
                        <div className="overflow-hidden my-2 lg:text-5xl">
                            <motion.h2
                                className={`text-dark-primary my-2 lg:text-5xl md:text-4xl text-[18px] block font-light ${
                                    theme === "light"
                                        ? "text-dark"
                                        : "text-light"
                                }`}
                                style={{ lineHeight: 1.2 }}
                                variants={textVariants}
                            >
                                Hi, I'm Bryan! I like creating clean, responsive
                                and functional web apps.
                            </motion.h2>
                        </div>
                        <div className="w-32 my-1 h-1 bg-dark-secondary mt-5 lg:h-2 lg:w-1/2"></div>
                    </div>
                </div>
                <div
                    className={`w-[150px] lg:h-2 lg:w-[300px] md:w-[200px] h-1 my-1 mt-1 ${
                        theme === "light" ? "bg-dark" : "bg-light"
                    }`}
                ></div>
            </motion.div>
        </div>
    );
};

export default Hero;
