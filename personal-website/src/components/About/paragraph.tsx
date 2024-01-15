import { ThemeContext } from "@/context/ThemeContext";
import { FunctionComponent, useContext } from "react";

interface ParagraphProps {
    children: React.ReactNode;
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => {
    const paragraphStyle = {
        transform: "translateY(-64.5044px)",
    };
    const { theme } = useContext(ThemeContext);

    return (
        <p
            className={`my-2 duration-700 lg:text-lg relative overflow-hidden ${
                theme === "light" ? "text-dark" : "text-light"
            }`}
            style={paragraphStyle}
        >
            <span>
                <span className="text-[14px] md:text-[16px] lg:text-[18px]">
                    {children}
                </span>
            </span>
        </p>
    );
};

export default Paragraph;
