import { FunctionComponent } from "react";

interface ParagraphProps {
    children: React.ReactNode;
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => {
    const paragraphStyle = {
        transform: "translateY(-64.5044px)",
    };

    return (
        <p
            className="my-2 duration-700 lg:text-lg relative overflow-hidden"
            style={paragraphStyle}
        >
            <span>
                <span className="">{children}</span>
            </span>
        </p>
    );
};

export default Paragraph;
