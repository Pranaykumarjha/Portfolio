import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/Components/Grid";
import RecentProjects from "@/Components/RecentProjects";
import { navItems } from "@/Data";
import Education from "@/Components/Education";
import Experience from "@/Components/Experience";
import Skills from "@/Components/Skills";
import DevelopmentProcess from "@/Components/Approach";
import CurrentlyLearning from "@/Components/CurrentlyLearning";
import Technology3DGlobe from "@/Components/Technology3DGlobe";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center flex-col  sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Skills />
      <RecentProjects />
      <Experience />
      <Education />
      <DevelopmentProcess />
      <CurrentlyLearning />
      <Technology3DGlobe />
      <Grid />
      <Footer />
    </div>
   </main>
  );
}

