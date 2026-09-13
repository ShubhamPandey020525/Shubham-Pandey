import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience";
import { JobSimulations } from "./components/JobSimulations";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Certifications } from "./components/Certifications";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <JobSimulations />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
