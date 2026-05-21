import React from 'react';
import { Briefcase, Award } from 'lucide-react';

interface TimelineItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  type: 'work' | 'competition';
}

export const Experience: React.FC = () => {
  const experiences: TimelineItem[] = [
    {
      id: 1,
      role: 'Website Designer & Observer',
      company: 'TESA TOP GUN RALLY #18',
      duration: '10 - 16 November 2024',
      description: 'Participated as an observer team member in the national TESA TOP GUN RALLY #18 competition, where I took primary responsibility for website design.',
      type: 'competition',
    },
    {
      id: 2,
      role: 'Contestant',
      company: 'ICPC 2024',
      duration: '7 - 8 September 2024',
      description: 'Participated in the ICPC competitive programming contest hosted at Chulalongkorn University (CU).',
      type: 'competition',
    },
    {
      id: 3,
      role: 'Project Presenter (Silver Medal)',
      company: 'THAILAND RESEARCH EXPO 2024',
      duration: '26 - 30 August 2024',
      description: 'Presented our team project at the Thailand Research Expo competition and was awarded a Silver Medal.',
      type: 'competition',
    },
    {
      id: 4,
      role: 'Contestant',
      company: 'THAILAND WRG CHAMPIONSHIP 2024',
      duration: '3 - 4 August 2024',
      description: 'Competed in the national World Robot Games (WRG) Championship robot competition.',
      type: 'competition',
    },
    {
      id: 5,
      role: 'Hardware Technician Training Assistant',
      company: 'Summer Workshop Assistant Teacher',
      duration: '22 April - 13 May 2024',
      description: 'Assisted in teaching and training students in hardware technician operations and microcontroller assembly.',
      type: 'work',
    },
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Experience</h2>

      <div className="timeline" style={{ marginTop: '50px' }}>
        {experiences.map((exp) => {
          const sideClass = exp.id % 2 !== 0 ? 'left' : 'right';
          return (
            <div key={exp.id} className={`timeline-item ${sideClass}`}>
              <div className="glass timeline-content">
                <span className="timeline-date">{exp.duration}</span>
                
                <h3 className="timeline-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', justifyContent: 'flex-start' }}>
                  <span style={{ display: 'inline-flex', marginTop: '3px', flexShrink: 0 }}>
                    {exp.type === 'work' && (
                      <Briefcase size={18} style={{ color: 'var(--color-primary)' }} />
                    )}
                    {exp.type === 'competition' && (
                      <Award size={18} style={{ color: 'var(--color-secondary)' }} />
                    )}
                  </span>
                  <span>{exp.role}</span>
                </h3>
                
                <h4 className="timeline-subtitle">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

