"use client";

import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import { triangleVariants } from "@/animation";

const Triangle: FunctionComponent = () => {
    const [element, controls] = useScroll(0.65);

    return (
        <div className="mt-[150px]">
            <div className="w-48 h-1 relative z-10 m-auto bg-black"></div>
            <div className=" w-48 h-1 relative z-10 m-auto top-2 bg-black"></div>
            <div className=" w-48 h-1 relative z-10 m-auto top-4 bg-black"></div>
            <motion.div
                aria-label="Triangle that gets lower as the user scrolls down"
                initial="hidden"
                animate={controls}
                ref={element}
                variants={triangleVariants}
                className="w-0 h-0 triangle m-auto relative bottom-10 blend-difference duration-700"
            ></motion.div>
        </div>
    );
};

export default Triangle;
