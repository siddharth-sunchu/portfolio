import React from 'react';
import { Award, Trophy } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      title: "Silver Award - Data Analytics",
      year: "2024",
      organization: "Claro Awards",
      icon: <Trophy size={24} />
    },
    {
      title: "Silver Award - Technology",
      year: "2024",
      organization: "Claro Awards",
      icon: <Trophy size={24} />
    },
    {
      title: "Global Recognition Award",
      year: "2024",
      description: "Significant contributions to artificial intelligence and data analytics through pioneering work at Amazon AWS",
      icon: <Award size={24} />
    },
    {
      title: "Indian Achievers' Award",
      year: "2024",
      description: "Recognized as an individual excelled in their respective fields and regions",
      icon: <Award size={24} />
    },
    {
      title: "Ops Award",
      year: "2022",
      organization: "Amazon FAST Team",
      icon: <Trophy size={24} />
    }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-[#CDFF00]">Awards</span> & Recognition
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="group border border-gray-800 rounded-lg p-6 hover:border-[#CDFF00] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#CDFF00] group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>
                <div className="text-sm text-gray-400">{award.year}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#CDFF00] transition-colors">
                {award.title}
              </h3>
              {award.organization && (
                <p className="text-gray-400 mb-2">{award.organization}</p>
              )}
              {award.description && (
                <p className="text-gray-300 text-sm">{award.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;