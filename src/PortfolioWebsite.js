import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  // Award,
  // Briefcase,
  Book,
  Users,
  Globe,
  MessageCircle,
  Star,
  Building2,
  Network , 
  UsersRound ,
  Lightbulb, 
  Gavel,
  Building, 
  FileText,
  HardHat ,
  Handshake,
  UserCircle,        // for intro - represents personal profile
  Brain,             // for expertise - represents knowledge/intelligence
  Users2,            // for advisory - represents board/group leadership
  Badge,             // for membership - represents official membership
  Trophy,            // for recognitions - represents achievements
  GanttChartSquare,  // for panels - represents organized evaluation
  Award,             // for awards - keeping this as it's perfect
  Briefcase,         // for professional - keeping this as it's perfect
  BookText,          // for publications - more specific than just Book
  Contact
} from 'lucide-react';
import {
  ExpertiseSection,
  Header,
  MembershipSection,
  JudgeAndPanelSection,
  PublicationsSection,
  ProfessionalExperienceSection,
  ContactSection,
  AwardsSection,
  RecognitionSection,
  IntroductionSection,
  Navbar,
  AnimatedSection,
  AdvisoryBoardSection
} from './Components';

import './PortfolioWebsite.css';


const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const sections = [
  //   { id: 'intro', title: 'Introduction', icon: <UserCircle size={20} /> },
  //   { id: 'expertise', title: 'Expert Insights', icon: <Brain size={20} /> },
  //   { id: 'advisory', title: 'Advisory Board Member', icon: <Users2 size={20} /> },
  //   { id: 'membership', title: 'Professional Membership', icon: <Building2    size={20} /> },
  //   { id: 'recognitions', title: 'Recognitions', icon: <Trophy size={20} /> },
  //   { id: 'panels', title: 'Judging & Panels', icon: <GanttChartSquare size={20} /> },
  //   { id: 'awards', title: 'Awards', icon: <Award size={20} /> },
  //   { id: 'professional', title: 'Professional Experience', icon: <Briefcase size={20} /> },
  //   { id: 'publications', title: 'Publications', icon: <BookText size={20} /> },
  //   { id: 'connect', title: "Let's Connect", icon: <Contact size={20} /> }
  // ];

  // const sections = [
  //   { id: 'intro', title: 'Introduction', icon: <UserCircle size={20} /> },
  //   { id: 'expertise', title: 'Expert Insights', icon: <Brain size={20} /> },
  //   { id: 'advisory', title: 'Advisory Board Member', icon: <Users2 size={20} /> },
  //   { id: 'membership', title: 'Professional Membership', icon: <Building2    size={20} /> },
  //   { id: 'recognitions', title: 'Recognitions', icon: <Trophy size={20} /> },
  //   { id: 'panels', title: 'Judging & Panels', icon: <GanttChartSquare size={20} /> },
  //   { id: 'awards', title: 'Awards', icon: <Award size={20} /> },
  //   { id: 'professional', title: 'Professional Experience', icon: <Briefcase size={20} /> },
  //   { id: 'publications', title: 'Publications', icon: <BookText size={20} /> },
  //   { id: 'connect', title: "Let's Connect", icon: <Contact size={20} /> }
  // ];

  // Chatgpt
  const sections = [
    { id: 'intro', title: 'Introduction', icon: <UserCircle size={20} /> }, // Personal touch for introduction
    { id: 'expertise', title: 'Expert Insights', icon: <Brain size={20} /> }, // Represents knowledge or insights
    { id: 'advisory', title: 'Advisory Board Member', icon: <Users  size={20} /> }, // Professional involvement
    { id: 'membership', title: 'Professional Membership', icon: <Handshake  size={20} /> }, // Represents community and network
    { id: 'recognitions', title: 'Recognitions', icon: <Award size={20} /> }, // Best suited for achievements
    { id: 'panels', title: 'Judging & Panels', icon: <Gavel size={20} /> }, // Judging/panel representation
    // { id: 'awards', title: 'Awards', icon: <Trophy size={20} /> }, // Represents winning and accomplishments
    { id: 'professional', title: 'Professional Experience', icon: <Briefcase  size={20} /> }, // Corporate/professional work
    { id: 'publications', title: 'Publications', icon: <FileText size={20} /> }, // Represents articles or documents
    { id: 'connect', title: "Let's Connect", icon: <Mail size={20} /> } // Communication and connection
  ];
  

  return (
    <>
      <Header />
      <div className="portfolio-container">
      <div
          className="fixed top-0 left-0 w-full h-1 bg-[#CDFF00] z-50 transform-origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        <Navbar activeSection={activeSection} sections={sections} />

        <div className="main-content">
          <nav className="mobile-nav">
            <div className="mobile-nav-header">
              <span className="portfolio-title">Portfolio</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-button"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            {isMenuOpen && (
              <div className="mobile-menu">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="mobile-nav-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            )}
          </nav>

          <main className="content">
            <AnimatedSection id="intro" className="bg-black">
              <IntroductionSection />
            </AnimatedSection>
            <AnimatedSection id="expertise" className="bg-black">
              <ExpertiseSection />
            </AnimatedSection>
            <AnimatedSection id="advisory" className="bg-black">
              <AdvisoryBoardSection />
            </AnimatedSection>
            <AnimatedSection id="membership" className="bg-black">
              <MembershipSection />
            </AnimatedSection>
            <AnimatedSection id="recognitions" className="bg-black">
              <RecognitionSection />
            </AnimatedSection>
            <AnimatedSection id="panels" className="bg-black">
              <JudgeAndPanelSection />
            </AnimatedSection>
            {/* <AnimatedSection id="awards" className="bg-black">
              <AwardsSection />
            </AnimatedSection> */}
            <AnimatedSection id="professional" className="bg-black">
              <ProfessionalExperienceSection />
            </AnimatedSection>
            <AnimatedSection id="publications" className="bg-black">
              <PublicationsSection />
            </AnimatedSection>
            <AnimatedSection id="connect" className="bg-black">
              <ContactSection />
            </AnimatedSection>
          </main>
        </div>
      </div>
    </>
  );
};

export default PortfolioWebsite;
