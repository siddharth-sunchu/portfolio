import React from 'react';
import { Award, Star } from 'lucide-react';
import './RecognitionSection.css';

const RecognitionSection = () => {
  const recognitions = [
    {
      title: "WomenTech Network Global Awards Nominee",
      year: "2024",
      description: "Recognized for outstanding contributions to the tech industry"
    },
    {
      title: "Technical Session Chair",
      year: "2024",
      description: "IEEE International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation (ARIIA 2024)"
    },
    {
      title: "Invited Speaker",
      year: "2024",
      description: "IEEE International Conference on Augmented Reality, Intelligent System, And Industrial Automation (ARIIA 2024)"
    },
    {
      title: "Invited Speaker",
      year: "2024",
      description: "International Conference on Artificial Intelligence, Data Science and Machine Learning (ICAIDSML 2024)",
      link: "https://www.espjournals.org/International_Conference_ICAIDSML"
    },
    {
      title: "Speaker",
      year: "2024",
      description: "Women in Tech Global Conference",
      link: "https://www.womentech.net/speaker/all/all/124411?_se=c2hhbHVwYXRpbDE1QGdtYWlsLmNvbQ%3D%3D"
    },
    {
      title: "Speaker",
      year: "2024",
      description: "The Data Science Conference",
      link: "https://www.thedatascienceconference.com"
    },
    {
      title: "Indian Alumni Network Scholarship",
      year: "2016",
      description: "The University of Texas at Dallas"
    },
    {
      title: "TechSTAR Award",
      year: "2015",
      description: "Infosys Company for Q4, 2015"
    },
    {
      title: "Best Outgoing Student",
      year: "2012",
      description: "Rajarambapu Institute of Technology (RIT), Rajaramnagar"
    }
  ];

  return (
    <section className="recognition-section">
      <div className="container">
        <h2 className="section-title">Recognitions</h2>
        <div className="recognition-grid">
          {recognitions.map((recognition, index) => (
            <div key={index} className="recognition-item">
              <div className="recognition-icon">
                {index === 0 ? <Award size={24} /> : <Star size={24} />}
              </div>
              <div className="recognition-content">
                <h3 className="recognition-title">{recognition.title}</h3>
                <p className="recognition-year">{recognition.year}</p>
                <p className="recognition-description">{recognition.description}</p>
                {recognition.link && (
                  <a href={recognition.link} target="_blank" rel="noopener noreferrer" className="recognition-link">
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
