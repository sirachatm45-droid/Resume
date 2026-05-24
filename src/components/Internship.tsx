import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import turnkey1 from '../assets/turnkey_internship_1.jpg';
import turnkey2 from '../assets/turnkey_internship_2.jpg';
import turnkey3 from '../assets/turnkey_internship_3.jpg';
import turnkey4 from '../assets/turnkey_internship_4.jpg';

export const Internship: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [turnkey1, turnkey2, turnkey3, turnkey4];

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const setSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  return (
    <section id="internship" className="section container">
      <h2 className="section-title">Internship</h2>
      
      <div className="internship-wrapper">
        <div className="glass internship-card">
          <div className="internship-image-wrapper">
            <div className="project-slideshow" style={{ height: '100%' }}>
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Turnkey Internship - Photo ${index + 1}`} 
                  className={`internship-img ${index === currentSlide ? 'active' : ''}`}
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
            <button
              className="slider-control prev"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="slider-control next"
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slider Dots */}
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={(e) => setSlide(index, e)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="internship-info">
            <span className="timeline-date" style={{ color: 'var(--color-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Calendar size={16} />
              <span>24 November 2025 - 14 March 2026</span>
            </span>
            
            <h3 className="internship-title">
              <Briefcase size={22} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>Front-End Developer Intern</span>
            </h3>
            
            <h4 className="internship-subtitle">Turnkey Communication Services</h4>
            
            <p className="internship-desc">
              Worked as a Front-End Developer intern, designing and developing responsive web interfaces and collaborating with back-end systems, with a solid understanding of database integration.
            </p>
            
            <div className="internship-keypoints">
              <div className="internship-keypoint">
                <CheckCircle2 size={16} />
                <span>Designed and developed responsive, modern user interfaces using React and styling systems.</span>
              </div>
              <div className="internship-keypoint">
                <CheckCircle2 size={16} />
                <span>Collaborated with back-end systems, integrating REST APIs and handling client-server state.</span>
              </div>
              <div className="internship-keypoint">
                <CheckCircle2 size={16} />
                <span>Applied database integration concepts to manage structured and dynamic application data.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
