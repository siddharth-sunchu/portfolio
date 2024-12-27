import React, { useState } from 'react';
import { Book, ChevronDown, ChevronUp } from 'lucide-react';
import './PublicationsSection.css';

const PublicationsSection = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({...prev, [index]: !prev[index]}));
  };

  const publications = [
    {
      title: "Study of collaborative filtering recommendation algorithm – Scalability issue",
      authors: "Pagare, R., & Patil, S. A.",
      journal: "International Journal of Computer Applications",
      year: 2013,
      link: null
    },
    {
      title: "Social recommender system by embedding social regularization",
      authors: "Pagare, R., & Patil, S. A.",
      conference: "2014 IEEE International Advance Computing Conference (IACC)",
      pages: "471–476",
      year: 2014,
      link: "https://doi.org/10.1109/IAdCC.2014.6779370"
    },
    {
      title: "Enhanced hybrid recommender system using social friend network",
      authors: "Patil, A., & Pagare, R.",
      journal: "International Journal of Management and Information Technology",
      year: 2014,
      link: "https://doi.org/10.24297/ijmit.v10i4.627"
    },
    {
      title: "Use of social regularization to enhance social recommender system",
      authors: "Patil, S.",
      conference: "Proceedings of the Third Post Graduate Symposium on Computer Engineering (cPGCON 2014)",
      organization: "Matoshri College of Engineering, Nasik, in association with Elsevier Publication and University of Pune",
      year: 2014,
      link: null
    },
    {
      title: "Investigating the optimal cloud computing infrastructure for training large-scale generative models",
      authors: "Mohammed, A. S., & Patil, S.",
      journal: "International Journal of Future Multidisciplinary Research (IJFMR)",
      volume: "4",
      issue: "6",
      year: 2022,
      link: null
    },
    {
      title: "Machine learning-driven insights into revenue opportunities: Data enrichment and validation techniques",
      authors: "Mohammed, A. S., & Patil, S.",
      journal: "ESP Journal of Engineering & Technology Advancements",
      volume: "2",
      issue: "2",
      pages: "146-153",
      year: 2022,
      link: null
    },
    {
      title: "Predictive revenue modeling for new market segments using data fusion and big data analytics",
      authors: "Patil, S., & Mohammed, A. S.",
      journal: "International Journal of Science and Research (IJSR)",
      year: 2023,
      link: "https://doi.org/10.21275/SR230215131505"
    },
    {
      title: "Proactive CRM: Predicting customer behavior and churn using machine learning models",
      authors: "Patil, S., & Mohammed, A. S.",
      journal: "International Journal of Data Science Research and Development",
      volume: "2",
      issue: "1",
      pages: "61-74",
      year: 2023,
      link: null
    },
    {
      title: "An overview of gaming peripheral and gadgets and its effect on gaming performance",
      authors: "R., P., Hawa, H., Chintale, P., Patil, S. A., Poddutoori, J. R., Podduturi, M., Javalkar, V., Reddy, N., & Bukya, M.",
      journal: "Engineered Science",
      volume: "32",
      pages: "1293",
      year: 2024,
      link: "http://dx.doi.org/10.30919/es1293"
    },
    {
      title: "Artificial Intelligence Models for Fraud Detection: Advancements, Challenges, and Future Prospects",
      authors: "Jain, N., & Patil, S.",
      journal: "International Journal of Global Innovations and Solutions (IJGIS)",
      year: 2024,
      link: "https://doi.org/10.21428/e90189c8.6d8ab5f6"
    },
    {
      title: "Trend Amplification or Suppression: The Dual Role of AI in Influencing Viral Content",
      authors: "Patil, S., Jani, A., & Konatam, S.",
      journal: "International Journal of Global Innovations and Solutions (IJGIS)",
      year: 2024,
      link: "https://doi.org/10.21428/e90189c8.361bcc7f"
    },
    {
      title: "Ethical challenges and accountability in generative AI: Managing copyright violations and misinformation in responsible AI systems",
      authors: "Samudrala, S. B., Bansal, A., Puchakayala, P. R. A., & Patil, S.",
      journal: "Utilitas Mathematica",
      volume: "121",
      pages: "365-377",
      year: 2024,
      link: "https://utilitasmathematica.com/index.php/Index/article/view/2081"
    },
    {
      title: "Navigating accountability in responsible generative AI: Ethical considerations and strategies for handling copyright and misinformation",
      authors: "Bansal, A., Samudrala, S. B., Patil, S., Suddala, S., & Puchakayala, P. R. A.",
      journal: "Nano: NTP",
      volume: "20",
      issue: "S14",
      year: 2024,
      link: "https://doi.org/10.62441/nano-ntp.vi.3285"
    }
  ];

  const acceptedPapers = [
    {
      title: "GreenCloud AI: Distributed Data Management for Energy-Efficient and Sustainable Cloud Ecosystems",
      conference: "6th International Conference on Mobile Computing and Sustainable Informatics (ICMCSI 2025)",
      organization: "IEEE",
      date: "7-8 Jan 2025"
    },
    {
      title: "EcoSmart AI: A Theoretical Framework for Energy-Aware Mobile Computing",
      conference: "6th International Conference on Mobile Computing and Sustainable Informatics (ICMCSI 2025025)",
      organization: "IEEE",
      date: "7-8 Jan 2025"
    },
    {
      title: "Unveiling Bias in AI-Powered Recommender Systems: An Ethical and Algorithmic Survey",
      conference: "8th Internationaonal Conference on Innovative Computing and Communication (ICICC-2025)",
      date: "14-15 Feb 2025"
    },
    {
      title: "Navigating Deepfakes with Data Science: A Multi-Modal Analysis and Blockchain-Based Detection Framework",
      conference: "1st International Conference on Pervasive Computational Technologies (ICPCT-2025)",
      location: "GLBITM, Greater Noida",
      date: "8-9 Feb 2025"
    },
    {
      title: "Personalization at Scale: A Theoretical Framework for AI-Driven Hyper-Personalized Social Media Campaigns",
      conference: "1st International Conference on Pervasive Computational Technologies (ICPCT-2025)",
      location: "GLBITM, Greater Noida",
      date: "8-9 Feb 2025"
    }
  ];

  return (
    <section className="publications-section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <div className="publication-icon">
                <Book size={24} />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="publication-authors">{pub.authors}</p>
                <p className="publication-details">
                  {pub.journal && <span className="publication-journal">{pub.journal}, </span>}
                  {pub.conference && <span className="publication-conference">{pub.conference}, </span>}
                  {pub.year}
                </p>
                {pub.pages && <p className="publication-pages">Pages: {pub.pages}</p>}
              </div>
              {pub.abstract && (
                <button 
                  className="expand-button" 
                  onClick={() => toggleExpand(index)}
                >
                  {expandedItems[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              )}
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Accepted Papers (To be published by Feb 2025)</h3>
        <div className="publications-list">
          {acceptedPapers.map((paper, index) => (
            <div key={index} className="publication-item">
              <div className="publication-icon">
                <Book size={24} />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">{paper.title}</h3>
                <p className="publication-details">
                  {paper.conference}, {paper.organization}
                </p>
                <p className="publication-date">Date: {paper.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
