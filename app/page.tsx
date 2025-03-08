import Header from "../components/Header";
import Main from "../components/Main";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
