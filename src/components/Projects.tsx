import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import awd1 from '../assets/awd_project_1.jpg';
import awd2 from '../assets/awd_project_2.jpg';
import awd3 from '../assets/awd_project_3.jpg';
import awd4 from '../assets/awd_project_4.jpg';
import awd5 from '../assets/awd_project_5.jpg';
import lora1 from '../assets/lora_project_1.jpg';
import lora2 from '../assets/lora_project_2.jpg';
import lora3 from '../assets/lora_project_3.jpg';
import lora4 from '../assets/lora_project_4.jpg';
import lora5 from '../assets/lora_project_5.jpg';

interface ProjectItem {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  images: string[];
}

export const Projects: React.FC = () => {
  // Track slide index for each project by its id
  const [slideIndices, setSlideIndices] = useState<Record<number, number>>({
    1: 0,
    2: 0,
  });

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Automatic Water Level Control System For Alternate Wetting-and-Drying Technique Project',
      desc: 'I was part of a team working on this project, which focuses on the use of IoT technology and was funded by the IEEE. We also received funding to present our work in Malaysia. This project also attracted the attention of GISTDA, leading to discussions on the details and feasibility of its application in future water management.',
      tags: ['IoT', 'ESP32', 'Water Management', 'IEEE Funded', 'Sensors'],
      images: [awd1, awd2, awd3, awd4, awd5],
    },
    {
      id: 2,
      title: 'Environmental Monitoring And Irrigation Control System Via LoRa Network For Nong Khiew Royal Project Development Center',
      desc: 'Developed and optimized user interfaces and portals for Nong Khiew Royal Project Development Center monitoring environmental metrics via LoRa Networks.',
      tags: ['React', 'LoRa Network', 'Web Portals', 'Environmental Monitoring'],
      images: [lora1, lora2, lora3, lora4, lora5],
    },
  ];

  const nextSlide = (projectId: number, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % imagesLength,
    }));
  };

  const prevSlide = (projectId: number, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + imagesLength) % imagesLength,
    }));
  };

  const setSlide = (projectId: number, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => {
          const currentSlide = slideIndices[project.id] ?? 0;
          const hasMultipleImages = project.images.length > 1;

          return (
            <div key={project.id} className="glass project-card">
              <div className="project-image-wrapper">
                <div className="project-slideshow">
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} - Slide ${index + 1}`}
                      className={`project-img ${index === currentSlide ? 'active' : ''}`}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: index === currentSlide ? 1 : 0,
                        transition: 'opacity 0.4s ease-in-out',
                        zIndex: index === currentSlide ? 1 : 0,
                      }}
                    />
                  ))}
                </div>

                {/* Slider Controls */}
                {hasMultipleImages && (
                  <>
                    <button
                      className="slider-control prev"
                      onClick={(e) => prevSlide(project.id, project.images.length, e)}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="slider-control next"
                      onClick={(e) => nextSlide(project.id, project.images.length, e)}
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Slider Dots */}
                {hasMultipleImages && (
                  <div className="slider-dots">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={(e) => setSlide(project.id, index, e)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

