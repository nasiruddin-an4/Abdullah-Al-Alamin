import Hero from "./components/Hero";
import About from "./components/About";
import StrategicPillars from "./components/StrategicPillars";
import Impact from "./components/Impact";
import MessageSection from "./components/MessageSection";
import LifeStyle from "./components/LifeStyle";
import News from "./components/News";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Impact />
      <StrategicPillars />
      <MessageSection />
      <LifeStyle />
      <News />
    </div>
  );
}
