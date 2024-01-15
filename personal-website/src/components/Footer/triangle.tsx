"use client";

import { FunctionComponent, useContext } from "react";
import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import { triangleVariants } from "@/animation";
import { ThemeContext } from "@/context/ThemeContext";

const Triangle: FunctionComponent = () => {
    const [element, controls] = useScroll(0.65);
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`mt-[150px] ${
                theme === "light" ? "bg-light" : "bg-dark"
            }`}
        >
            <div
                className={`w-48 h-1 relative z-10 m-auto ${
                    theme === "light" ? "bg-light" : "bg-dark"
                } `}
            ></div>
            <div
                className={`w-48 h-1 relative z-10 m-auto top-2  ${
                    theme === "light" ? "bg-light" : "bg-dark"
                }`}
            ></div>
            <div
                className={`w-48 h-1 relative z-10 m-auto top-4 ${
                    theme === "light" ? "bg-light" : "bg-dark"
                }`}
            ></div>
            <motion.div
                aria-label="Triangle that gets lower as the user scrolls down"
                initial="hidden"
                animate={controls}
                ref={element}
                variants={triangleVariants}
                className="w-0 h-0 triangle m-auto relative bottom-10 blend-difference duration-700 mix-blend-difference"
            ></motion.div>
        </div>
    );
};

export default Triangle;
