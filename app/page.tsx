import Hero from "@/components/Hero";
import About from "@/components/About";
import StoryVideo from "@/components/StoryVideo";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import OutreachPreview from "@/components/OutreachPreview";
import TeamPreview from "@/components/TeamPreview";
import Partnership from "@/components/Partnership";
import Impact from "@/components/Impact";
import Strengths from "@/components/Strengths";
import GetInvolved from "@/components/GetInvolved";
import FundCTA from "@/components/FundCTA";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><StoryVideo /></Reveal>
      <Reveal><Problem /></Reveal>
      <Reveal><Solution /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><OutreachPreview /></Reveal>
      <Reveal><TeamPreview /></Reveal>
      <Reveal><Partnership /></Reveal>
      <Reveal><Impact /></Reveal>
      <Reveal><Strengths /></Reveal>
      <Reveal><GetInvolved /></Reveal>
      <Reveal><FundCTA /></Reveal>
      <Contact />
    </>
  );
}
