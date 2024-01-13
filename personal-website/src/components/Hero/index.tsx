import { FunctionComponent } from "react";
import Header from "./header";

interface Props {}

const Hero: FunctionComponent<Props> = () => {
    return (
        <header className="mx-8 min-h-12 md:w-9/12 md:m-auto lg:mt-8 my-4 lg:mb-0 lg:min-h-screen xxl:min-h-0 xxl:mb-12">
            <Header />
            <div className="flex flex-col w-10/12 lg:w-7/12 lg:mt-5 relative">
                <div className="overflow-hidden mb-6 lg:text-7xl w-min">
                    <h1
                        className="lg:text-8xl md:text-7xl blockf font-semibold"
                        style={{ lineHeight: 1.15 }}
                    >
                        Bryan . Rustardy
                    </h1>
                </div>
                <div>
                    <div className="overflow-hidden my-2 lg:text-5xl">
                        <h2
                            className="text-dark-primary my-2 md:text-4xl lg:text-5xl block font-light"
                            style={{ lineHeight: 1.2 }}
                        >
                            Hi, I'm Bryan! I like creating clean, responsive and
                            functional web apps.
                        </h2>
                    </div>
                    <div className="w-32 my-1 h-1 bg-dark-secondary mt-5 lg:h-2 lg:w-1/2"></div>
                </div>
            </div>
            <div className="w-[300px] h-2 my-1 bg-white mt-1"></div>
        </header>
    );
};

export default Hero;
