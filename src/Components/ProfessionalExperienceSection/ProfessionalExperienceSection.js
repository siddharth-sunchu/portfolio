import React from 'react';
import { Briefcase, Cloud, ChartBar, Database } from 'lucide-react';
import './ProfessionalExperienceSection.css';

const ProfessionalExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Business Intelligence Engineer",
      company: "Amazon AWS",
      period: "Jan 2022 - Present",
      description: "Built ML models improving revenue realization estimates to 75% accuracy. Developed data models and dashboards for executive-level summaries across AWS. Designed reports tracking 3,600+ engagements worth $4.5 billion. Managed 40+ data pipelines using AWS technologies including Redshift, S3, and Glue. Ensured data integrity and security compliance in Quicksight.",
      icon: <Cloud size={24} />
    },
    {
      title: "Senior Business Technology Consultant",
      company: "Tango Management Consulting",
      period: "Aug 2017 - Jan 2022",
      description: "Led lease accounting implementations for 27 clients using AI/ML for location optimization. Conducted industry research and implemented complex analytical solutions, saving 33% in man-hours. Created BI dashboards using Tableau and Python, reducing load times by 300%. Developed ML techniques, increasing product fulfillment by 1.5%.",
      icon: <ChartBar size={24} />
    },
    {
      title: "Associate Business Intelligence Consultant Intern",
      company: "iOLAP Inc",
      period: "May 2017 - Aug 2017",
      description: "Designed BI solutions for cloud migration, reducing operational costs by 45%. Optimized SQL queries, improving application efficiency by 13%. Developed statistical models and dashboards using Qlikview for inventory forecasting and sales insights.",
      icon: <Database size={24} />
    },
    {
      title: "Systems Engineer",
      company: "Infosys Ltd",
      period: "Feb 2014 - Dec 2015",
      description: "Designed BI applications for healthcare, increasing product fulfillment by 1.5%. Implemented new archiving platform, saving $2.5M and 70% server space. Developed 250+ Informatica mappings and PL/SQL packages for data warehousing. Built Web Intelligence reports with 95% accuracy for pharmaceutical cost allocation.",
      icon: <Briefcase size={24} />
    },
  ];

  return (
    <section className="professional-experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-icon">
                {exp.icon}
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;
