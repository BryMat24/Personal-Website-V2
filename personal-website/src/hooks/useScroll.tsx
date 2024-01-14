"use client";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

type Threshold = number | number[];

const useScroll = (threshold: Threshold = 0.07) => {
    const [element, view] = useInView({ threshold });
    const controls = useAnimation();

    useEffect(() => {
        if (view) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
    }, [view, controls]);

    return [element, controls] as const;
};

export default useScroll;
