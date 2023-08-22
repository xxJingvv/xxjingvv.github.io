import React from 'react';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";

function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection/>
            <ProjectSection/>
            <TestimonialsSection/>
            <ContactBanner/>
        </div>
    );
}

export default Home;