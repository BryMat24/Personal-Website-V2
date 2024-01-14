import { FunctionComponent } from "react";

interface Props {
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectDisplay: FunctionComponent<Props> = ({
    title,
    description,
    imageUrl,
}) => {
    return (
        <div
            className="flex flex-col my-12 duration-700 md:flex-col md:m-0 lg:mt-12 lg:w-7/12 lg:m-auto lg:flex-row lg:mb-24"
            style={{ transform: "translateY(-108.055px) translateZ(0px)" }}
        >
            <div className="flex flex-col mb-4 md:w-3/5 md:m-auto md:mt-20 lg:w-10/12 lg:flex-shrink-0 lg:mt-0 lg:mr-12 lg:mb-0">
                <button
                    aria-label="Visit project's website"
                    className="mb-2 md:my-2"
                >
                    <div className="flex flex-col my-2 md:mt-4">
                        <div className="lazyload-wrapper">
                            <img
                                className="self-start m-auto project-fallback max-h-[300px] w-full object-cover rounded-md"
                                alt="Screenshot of current project"
                                src={imageUrl}
                            />
                        </div>
                    </div>
                </button>
                <div className="relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40"></div>
            </div>
            <div className="flex flex-col items-start flex-shrink-0 md:w-4/6 md:m-auto md:mt-8 lg:mt-0 lg:w-5/12">
                <h4 className="text-gray-50 mb-3 font-semibold lg:self-start lg:mt-3 lg:mb-0 text-3xl">
                    {title}
                </h4>
                <p className="text-gray-50 text-lg font-light mt-3">
                    {description}
                </p>
                <div className="flex gap-5 mt-5">
                    <p className="font-bold border-r-2 pr-5">Code</p>
                    <p className="font-bold">Live</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;
