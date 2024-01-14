import { FunctionComponent } from "react";

interface Props {
    title: string;
}

const Subheading: FunctionComponent<Props> = ({ title }) => {
    const subheadingStyle = {
        transform: "translateY(-64.5044px)",
    };

    return (
        <h4
            className="text-dark-primary mt-8 duration-700 lg:text-2xl about-heading"
            style={subheadingStyle}
        >
            {title}
        </h4>
    );
};

export default Subheading;
