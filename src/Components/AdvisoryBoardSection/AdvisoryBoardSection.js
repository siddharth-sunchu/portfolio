import React from 'react';
import './AdvisoryBoardSection.css';

const AdvisoryBoardSection = () => {
  const advisoryPositions = [
    {
      title: "AI and Data Science Advisory Board Member",
      organization: "Retail AI Council",
      description: "Driving AI strategies for retail transformation.",
      location: "International",
      period: "2023 - Present"
    },
    {
      title: "Business Analytics Advisory Board Member",
      organization: "Cal Poly MS, Orfalea College of Business",
      description: "Guiding curriculum development and industry alignment",
      location: "San Luis Obispo, CA, USA",
      period: "2022 - Present"
    },
    {
      title: "International Advisory Board Member",
      organization: "IEEE International Conference on ARIIA",
      description: "2024 IEEE International Conference on ARIIA",
      location: "Global",
      period: "2024"
    },
    {
      title: "Department Advisory Board Member",
      organization: "MIT School of Computing",
      description: "Shaping academic excellence in computing education",
      location: "Pune, India",
      period: "2023 - Present"
    }
  ];

  return (
    <section className="advisory-section">
      <div className="container">
        <h2 className="section-title">Advisory Board Positions</h2>
        <div className="advisory-timeline">
          {advisoryPositions.map((position, index) => (
            <div key={index} className="advisory-item">
              <div className="timeline-marker"></div>
              <div className="advisory-content">
                <div className="advisory-header">
                  <h3 className="advisory-title">{position.title}</h3>
                  <span className="advisory-period">{position.period}</span>
                </div>
                <h4 className="advisory-organization">{position.organization}</h4>
                <p className="advisory-description">{position.description}</p>
                <span className="advisory-location">{position.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoardSection;