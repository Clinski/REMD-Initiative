import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StoryVideo from "@/components/StoryVideo";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Partnership from "@/components/Partnership";
import Impact from "@/components/Impact";
import Strengths from "@/components/Strengths";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <StoryVideo />
      <Problem />
      <Solution />
      <Partnership />
      <Impact />
      <Strengths />
      <GetInvolved />
      <Contact />
      <Footer />
    </main>
  );
}
