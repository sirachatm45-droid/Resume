import React from 'react';
import { Code, Cpu, Globe, Layers, Database } from 'lucide-react';

export const About: React.FC = () => {
  const skillsData = [
    {
      category: 'Hardware',
      icon: <Cpu size={18} />,
      skills: ['ESP32', 'ESP8266', 'Arduino'],
    },
    {
      category: 'Programming',
      icon: <Code size={18} />,
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      icon: <Layers size={18} />,
      skills: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Database',
      icon: <Database size={18} />,
      skills: ['SQL', 'MongoDB'],
    },
    {
      category: 'Language',
      icon: <Globe size={18} />,
      skills: ['Thai', 'English'],
    },
  ];


  return (
    <section id="about" className="section container">
      <div className="bg-glow-2"></div>
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid" style={{ marginTop: '20px' }}>
        {/* Left Card: Background Description */}
        <div className="glass about-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            My Journey
          </h3>
          <div className="about-text">
            <p>
              Computer Engineering student with a solid foundation in hardware engineering, IoT system design, and website programming. Experienced in building connected systems, designing web portals, and developing practical IoT solutions through hands-on projects, teamwork, and competitions.
            </p>
            <p>
              My goal is to pursue a professional career in hardware engineering, where I can apply my knowledge of microcontrollers (ESP32, ESP8266, Arduino) and web technologies to design smart, interconnected products.
            </p>
            <p>
              I am highly enthusiastic, responsible, and committed to continuous learning. I look forward to working on new challenges in embedded architectures and responsive systems.
            </p>
          </div>
        </div>

        {/* Right Card: Skills Matrix */}
        <div className="glass about-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Technical Expertise
          </h3>
          <div className="skills-wrapper">
            {skillsData.map((group, index) => (
              <div key={index} className="skill-category">
                <div 
                  className="skill-category-title" 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}
                >
                  {group.icon}
                  <span>{group.category}</span>
                </div>
                <div className="skills-grid">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
