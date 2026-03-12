import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/Components/Grid";
import RecentProjects from "@/Components/RecentProjects";
import { navItems } from "@/Data";
import Clients from "@/Components/Clients";
import Experience from "@/Components/Experience";
import Approach from "@/Components/Approach";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center flex-col  sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients/>
      <Experience />
      <Approach />
      <Footer />
    </div>
   </main>
  );
}
