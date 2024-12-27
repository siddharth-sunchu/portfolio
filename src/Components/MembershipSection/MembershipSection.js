import React from 'react';
import './MembershipSection.css';

const MembershipSection = () => {
  const memberships = [
    {
      title: "IEEE Senior Member",
      description: "Honored for significant contributions to technology and engineering.",
      year: "2024",
      logo: "path_to_ieee_logo.png"
    },
    {
      title: "AI and Data Science Advisory Board Member",
      description: "Retail AI Council: Driving AI strategies for retail transformation.",
      organization: "Retail AI Council",
      logo: "path_to_retail_ai_council_logo.png"
    },
    {
      title: "Business Analytics Advisory Board Member",
      description: "Cal Poly MS, Orfalea College of Business, San Luis Obispo, CA, USA",
      organization: "Cal Poly",
      logo: "path_to_cal_poly_logo.png"
    },
    {
      title: "Raptors Fellow",
      description: "Recognized for innovation in technology",
      organization: "Hackathon Raptors",
      logo: "path_to_raptors_logo.png"
    },
    {
      title: "International Advisory Board Member",
      description: "2024 IEEE International Conference on ARIIA",
      organization: "IEEE",
      logo: "path_to_ieee_logo.png"
    },
    {
      title: "Department Advisory Board Member",
      description: "MIT School of Computing, Pune, India",
      organization: "MIT University",
      logo: "path_to_mit_logo.png"
    },
    {
      title: "Royal Fellow",
      description: "Executive committee member of IOASD",
      organization: "International Organization for Academic and Scientific Development",
      logo: "path_to_ioasd_logo.png"
    },
    {
      title: "Early Adopter Member",
      description: "AI Frontier Network (AIFN)",
      organization: "AIFN",
      logo: "path_to_aifn_logo.png"
    }
  ];

  return (
    <section className="membership-section">
      <div className="container">
        <h2 className="section-title">Professional Memberships</h2>
        <div className="membership-grid">
          {memberships.map((membership, index) => (
            <div key={index} className="membership-card">
              <img src={membership.logo} alt={membership.title} className="membership-logo" />
              <h3 className="membership-title">{membership.title}</h3>
              <p className="membership-description">{membership.description}</p>
              {membership.year && <p className="membership-year">Since {membership.year}</p>}
              {membership.organization && <p className="membership-org">{membership.organization}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;

