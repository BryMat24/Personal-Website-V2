import { FunctionComponent } from "react";
import Social from "./social";
import Triangle from "./triangle";

const Footer: FunctionComponent = () => {
    return (
        <>
            <Triangle />
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
