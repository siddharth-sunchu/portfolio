import React from 'react';
import { Award, Users, BookOpen, Code } from 'lucide-react';
import './JudgeAndPanelSection.css';

const JudgeAndPanelSection = () => {
  const experienceData = {
    conferences: [
      {
        title: "2024 IEEE International Conference on ARIIA",
        role: "Technical Session Chair",
        papers: null
      },
      {
        title: "16th IEEE CSNT 2025",
        role: "TPC Chair & Peer Reviewer",
        papers: null
      },
      {
        title: "16th IEEE CSNT 2024",
        role: "TPC Member & Peer Reviewer",
        papers: 2
      },
      {
        title: "ISRITI 2024",
        role: "TPC Member & Peer Reviewer",
        papers: 27
      },
      {
        title: "BTS-12C 2024",
        role: "TPC Member & Peer Reviewer",
        papers: 19
      },
      {
        title: "IEEE IC3ECSBHI-2025",
        role: "Peer Reviewer",
        papers: 9
      },
      {
        title: "ICON-AI-SMT'25",
        role: "Peer Reviewer",
        papers: 4
      }
    ],
    journals: [
      {
        title: "International Journal of Blockchain Applications and Secure Computing",
        papers: 1
      },
      {
        title: "Information Resources Management Journal",
        papers: 1
      },
      {
        title: "IGI Global Publications",
        role: "Book Reviewer",
        papers: 2,
        type: "Book Chapters"
      }
    ],
    awards: [
      "Claro Awards",
      "Titan Women in Business Awards",
      "Globee Awards",
      "The Stevie Awards for Women",
      "Brandon Hall Awards"
    ],
    hackathons: [
      {
        name: "GPT4o: Code & Conquer",
        link: "https://gpt4o-code-conquer.devpost.com"
      },
      {
        name: "MEGA Hackathon 2025",
        link: "https://mega-hackathon-2025.devpost.com"
      },
      {
        name: "Learn It: Fall Hacks",
        link: "https://learn-it-fall-hacks.devpost.com"
      },
      {
        name: "HackUTD",
        link: "https://hackutd.co"
      },
      {
        name: "Google Developer Groups GGITS",
        link: "https://buildwithai.devpost.com"
      }
    ]
  };

  return (
    <section className="judge-panel-section">
      <div className="container">
        <h2 className="section-title">Judging and Panel Experience</h2>
        <div className="experience-grid">
          <div className="experience-column">
            <h3 className="column-title">
              <Users className="column-icon" />
              Conference Reviews
            </h3>
            {experienceData.conferences.map((conf, idx) => (
              <div key={idx} className="experience-item">
                <h4 className="item-title">{conf.title}</h4>
                <p className="item-role">{conf.role}</p>
                {conf.papers && <p className="item-papers">Papers Reviewed: {conf.papers}</p>}
              </div>
            ))}
          </div>
          
          <div className="experience-column">
            <h3 className="column-title">
              <BookOpen className="column-icon" />
              Journal Reviews
            </h3>
            {experienceData.journals.map((journal, idx) => (
              <div key={idx} className="experience-item">
                <h4 className="item-title">{journal.title}</h4>
                <p className="item-role">{journal.role || 'Peer Reviewer'}</p>
                <p className="item-papers">{journal.papers} {journal.type || 'Papers'} Reviewed</p>
              </div>
            ))}
          </div>
          
          <div className="experience-column">
            <h3 className="column-title">
              <Award className="columlumn-icon" />
              Award Judging
            </h3>
            {experienceData.awards.map((award, idx) => (
              <div key={idx} className="experience-item">
                <h4 className="item-title">{award}</h4>
                <p className="item-role">Judge</p>
              </div>
            ))}
          </div>
          
          <div className="experience-column">
            <h3 className="column-title">
              <Code className="column-icon" />
              Hackathon Judging
            </h3>
            {experienceData.hackathons.map((hack, idx) => (
              <a 
                key={idx}
                href={hack.link}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-item hackathon-link"
              >
                <h4 className="item-title">{hack.name}</h4>
                <p className="item-role">Hackathon Judge</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgeAndPanelSection;

