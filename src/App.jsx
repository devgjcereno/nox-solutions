import HeroSection from "./pages/HeroSection"; // Update path if stored in a components folder
import WhatWeDo from "./pages/WhatWeDo";
import Projects from "./pages/Projects";
import Difference from "./pages/Difference";
import MeetTheTeam from "./pages/MeetTheTeam";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <main>
      <HeroSection />
      <WhatWeDo />
      <Projects />
      <Difference />
      <MeetTheTeam />
      <Contacts />
      <Footer />
    </main>
  );
}
