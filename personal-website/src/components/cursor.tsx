"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({
        dotX: 0,
        dotY: 0,
        outlineX: 0,
        outlineY: 0,
    });

    useEffect(() => {
        const mouseMoveHandler = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            setCursorPosition({
                dotX: clientX,
                dotY: clientY,
                outlineX: clientX - 15,
                outlineY: clientY - 15,
            });
        };

        document.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    const { dotX, dotY, outlineX, outlineY } = cursorPosition;

    return (
        <>
            <div className="cursor-dot" style={{ left: dotX, top: dotY }}></div>
            <motion.div
                className="cursor-outline"
                animate={{
                    x: outlineX,
                    y: outlineY,
                }}
                transition={{ duration: 0.5 }}
            ></motion.div>
        </>
    );
};

export default Cursor;
