import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Cursor from "@/components/cursor";

export default function Home() {
    return (
        <div>
            <Cursor />
            <Hero />
            <About />
            <Project />
            <Footer />
        </div>
    );
}
