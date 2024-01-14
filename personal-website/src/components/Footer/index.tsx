import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return (
        <>
            <div className="w-48 h-1 relative z-10 m-auto bg-black"></div>
            <div className=" w-48 h-1 relative z-10 m-auto top-2 bg-dark-bg"></div>
            <div className=" w-48 h-1 relative z-10 m-auto top-4 bg-dark-bg"></div>
            <div
                aria-label="Triangle that gets lower as the user scrolls down"
                className="w-0 h-0 triangle m-auto relative bottom-10 blend-difference duration-700"
                style={{
                    opacity: 1,
                    transform: "translateY(-11.3054px) translateZ(0px)",
                }}
            ></div>
        </>
    );
};

export default Footer;
