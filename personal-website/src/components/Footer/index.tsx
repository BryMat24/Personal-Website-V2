import { FunctionComponent } from "react";
import Social from "./social";

const Footer: FunctionComponent = () => {
    return (
        <>
            <div className="mt-[150px]">
                <div className="w-48 h-1 relative z-10 m-auto bg-black"></div>
                <div className=" w-48 h-1 relative z-10 m-auto top-2 bg-black"></div>
                <div className=" w-48 h-1 relative z-10 m-auto top-4 bg-black"></div>
                <div
                    aria-label="Triangle that gets lower as the user scrolls down"
                    className="w-0 h-0 triangle m-auto relative bottom-10 blend-difference duration-700"
                    style={{
                        opacity: 1,
                        transform: "translateY(-11.3054px) translateZ(0px)",
                    }}
                ></div>
            </div>
            <section className="flex flex-col mb-20 items-center">
                <p className="text-white text-3xl text-center">
                    See my full profile
                </p>
                <button className="bg-light-bg border border-light-secondary border-solid my-8 mx-6 p-3 mt-5 duration-300">
                    <span className="text-light-secondary text-2xl font-light">
                        My Resume
                    </span>
                </button>
            </section>
            <Social />
        </>
    );
};

export default Footer;
