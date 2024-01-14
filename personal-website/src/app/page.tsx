import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
    const blobStyle = {
        "--time": "20s",
        "--amount": 5,
        "--fill": "white",
    };

    return (
        <div>
            <Hero />
            <About />
            <Project />
            <Footer />
        </div>
    );
}
