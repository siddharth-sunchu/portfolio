import React from 'react';
import { Award, Users } from 'lucide-react';
import './PanelsAwardsSection.css';

const PanelsAwardsSection = () => {
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
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Awards & Panels</h2>
          <p className="text-gray-600">Recognition and contributions to the tech community</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Conference & Journal Reviews */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-[#CDFF00] mr-3" />
              <h3 className="text-2xl font-semibold">Academic Contributions</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Conference Reviews</h4>
                <div className="space-y-3">
                  {experienceData.conferences.map((conf, idx) => (
                    <div key={idx} className="border-l-4 border-[#CDFF00] pl-4 py-2">
                      <p className="font-medium">{conf.title}</p>
                      <p className="text-sm text-gray-600">
                        {conf.role}
                        {conf.papers && ` • ${conf.papers} Papers Reviewed`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Journal Reviews</h4>
                <div className="space-y-3">
                  {experienceData.journals.map((journal, idx) => (
                    <div key={idx} className="border-l-4 border-[#CDFF00] pl-4 py-2">
                      <p className="font-medium">{journal.title}</p>
                      <p className="text-sm text-gray-600">
                        {journal.role || 'Peer Reviewer'} • {journal.papers} {journal.type || 'Papers'} Reviewed
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Hackathon Judging */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-[#CDFF00] mr-3" />
              <h3 className="text-2xl font-semibold">Awards & Hackathons</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Award Judging</h4>
                <div className="grid grid-cols-2 gap-3">
                  {experienceData.awards.map((award, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center transform hover:scale-105 transition-all duration-300">
                      <p className="font-medium">{award}</p>
                      <p className="text-sm text-gray-600">Judge</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Hackathon Judging</h4>
                <div className="space-y-3">
                  {experienceData.hackathons.map((hack, idx) => (
                    <a 
                      key={idx}
                      href={hack.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-l-4 border-[#CDFF00] pl-4 py-2 hover:bg-gray-50 transition-all duration-300"
                    >
                      <p className="font-medium">{hack.name}</p>
                      <p className="text-sm text-gray-600">Hackathon Judge</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelsAwardsSection;