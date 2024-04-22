import { Header, Intro, Projects, Certifications, Experiences, Education, Contact } from "./sections";
import SideLinks from "./components/side-links";
import ThemeSwitch  from "./components/theme-switch";
import SectionDivider from "./components/section-divider";
import "@preact/signals-react/auto";

function App() {
    return (
        <main className="flex flex-col items-center !scroll-smooth">
            <SideLinks />
            <Header />
            <Intro />
            <div className="flex flex-col items-center px-4">
                <SectionDivider />
                <Projects />
                <SectionDivider />
                <Certifications />
                <Experiences />
                <SectionDivider />
                <Education />
                <Contact />
                <ThemeSwitch />
            </div>
        </main>
    );
}

export default App;
