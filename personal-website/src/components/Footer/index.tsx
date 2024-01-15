"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { FunctionComponent, useContext } from "react";
import Social from "./social";
import Triangle from "./triangle";

const Footer: FunctionComponent = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Triangle />
            <section
                className={`flex flex-col pb-20 items-center ${
                    theme === "light" ? "bg-light" : "bg-dark"
                }`}
            >
                <p
                    className={`${
                        theme === "light" ? "bg-light" : "bg-dark"
                    } text-3xl text-center`}
                >
                    See my full profile
                </p>
                <button
                    className={`bg-light-bg border border-solid my-5 mx-6 p-3 mt-5 md:p-5 duration-300 ${
                        theme === "light" ? "border-dark" : "border-light"
                    }`}
                >
                    <a href="BryanCV.pdf" download="Bryan Matthew Rustardy CV">
                        <span
                            className={`text-2xl font-light ${
                                theme === "light" ? "text-dark" : "text-light"
                            }`}
                        >
                            My Resume
                        </span>
                    </a>
                </button>
            </section>
            <Social />
        </>
    );
};

export default Footer;
