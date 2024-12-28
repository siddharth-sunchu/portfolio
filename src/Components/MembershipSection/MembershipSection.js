import React from 'react';
import './MembershipSection.css';

const MembershipSection = () => {
  const memberships = [
    {
      title: "IEEE Senior Member",
      description: "Honored for significant contributions to technology and engineering.",
      year: "2024",
      type: "Professional"
    },
    {
      title: "Raptors Fellow",
      description: "Recognized for innovation in technology",
      organization: "Hackathon Raptors",
      type: "Fellowship"
    },
    {
      title: "Royal Fellow",
      description: "Executive committee member of IOASD",
      organization: "International Organization for Academic and Scientific Development",
      type: "Fellowship"
    },
    {
      title: "Early Adopter Member",
      description: "AI Frontier Network (AIFN)",
      organization: "AIFN",
      type: "Professional"
    }
  ];

  // Group memberships by type
  const groupedMemberships = memberships.reduce((acc, membership) => {
    acc[membership.type] = acc[membership.type] || [];
    acc[membership.type].push(membership);
    return acc;
  }, {});

  return (
    <section className="membership-section">
      <div className="container">
        <h2 className="section-title">Professional Memberships</h2>
        {Object.entries(groupedMemberships).map(([type, items]) => (
          <div key={type} className="membership-category">
            <h3 className="category-title">{type}</h3>
            <div className="membership-grid">
              {items.map((membership, index) => (
                <div key={index} className="membership-card">
                  <div className="membership-content">
                    <h3 className="membership-title">{membership.title}</h3>
                    <p className="membership-description">{membership.description}</p>
                    {membership.year && <p className="membership-year">Since {membership.year}</p>}
                    {membership.organization && (
                      <p className="membership-org">{membership.organization}</p>
                    )}
                  </div>
                  <div className="card-decoration"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipSection;