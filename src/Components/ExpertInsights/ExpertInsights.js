import React from 'react';
import { Brain, Database, ChartBar, LineChart, Network } from 'lucide-react';
import './ExpertInsightsSection.css';

const ExpertInsightsSection = () => {
  const fields = [
    {
      title: "Artificial Intelligence",
      icon: <Brain size={24} />,
      description: "Specializing in developing and implementing AI solutions for enterprise applications, with a focus on advanced predictive modelling and smart location strategies."
    },
    {
      title: "Machine Learning",
      icon: <Network size={24} />,
      description: "Expertise in developing ML models for revenue realization estimates, customer behavior prediction, and fraud detection, with a focus on improving accuracy and efficiency."
    },
    {
      title: "Data Management",
      icon: <Database size={24} />,
      description: "Advanced skills in data modeling, ETL processes, and managing large-scale datasets using cloud-based technologies like AWS Redshift, S3, and Glue."
    },
    {
      title: "Business Intelligence",
      icon: <ChartBar size={24} />,
      description: "Proficient in creating BI dashboards and reports using tools like Tableau, Python, and OBIEE for financial, sales, and demographic data analytics."
    },
    {
      title: "Data Analytics",
      icon: <LineChart size={24} />,
      description: "Specialized in applying statistical and computational methods to analyze data trends and patterns, enhancing business performance and decision-making processes."
    }
  ];

  return (
    <section className="expert-insights-section">
      <div className="container">
        <h2 className="section-title">Expert Insights</h2>
        <div className="insights-grid">
          {fields.map((field, index) => (
            <div key={index} className="insight-card">
              <div className="insight-icon">{field.icon}</div>
              <h3 className="insight-title">{field.title}</h3>
              <p className="insight-description">{field.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertInsightsSection;

