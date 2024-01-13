import { FunctionComponent } from "react";
import SectionHeading from "../sectionHeading";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
    return (
        <section className="bg-black px-8 py-4 pb-24 mt-7 flex flex-col">
            <div className="md:w-auto md:m-0 lg:w-3/4 lg:m-auto">
                <SectionHeading title="Projects" type="left" />
            </div>
        </section>
    );
};

export default Project;
