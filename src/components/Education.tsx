import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export const Education: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      id: 1,
      degree: 'Computer Engineering',
      institution: 'Rajamangala University of Technology Thanyaburi',
      duration: '2022 - 2026',
      description: 'Focusing on hardware engineering, microcontrollers, networking, and programming fundamentals.',
    },
  ];

  return (
    <section id="education" className="section container">
      <h2 className="section-title">Education</h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="glass timeline-content"
            style={{ maxWidth: '600px', width: '100%', padding: '30px' }}
          >
            <span className="timeline-date">{edu.duration}</span>

            <h3 className="timeline-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', justifyContent: 'flex-start' }}>
              <span style={{ display: 'inline-flex', marginTop: '3px', flexShrink: 0 }}>
                <GraduationCap size={18} style={{ color: 'var(--color-secondary)' }} />
              </span>
              <span>{edu.degree}</span>
            </h3>

            <h4 className="timeline-subtitle">{edu.institution}</h4>
            <p className="timeline-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
