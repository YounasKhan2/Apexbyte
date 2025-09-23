import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import dynamic from "next/dynamic";
const Services = dynamic(() => import("../components/Services"), { ssr: true });
const Portfolio = dynamic(() => import("../components/Portfolio"), { ssr: true });
const About = dynamic(() => import("../components/About"), { ssr: true });
const Testimonials = dynamic(() => import("../components/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("../components/Contact"), { ssr: true });
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <Hero />
  <TrustBar />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
