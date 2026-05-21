import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="bg-glow-1"></div>
      <div className="hero-content">
        <div>
          <span className="hero-subtitle">Welcome to my space</span>
          <h1 className="hero-title">
            Hi, I'm <span>Sirachat Maisuaydee</span><br />
            Computer Engineering Student
          </h1>
          <p className="hero-desc">
            Computer Engineering student with experience in IoT development, embedded systems, and website programming. Passionate about building practical solutions and continuously developing technical skills through projects, competitions, and teamwork.
          </p>
          <div className="hero-btns">
            <button onClick={scrollToProjects} className="btn btn-primary">
              View My Projects <ArrowRight size={18} />
            </button>
            <button onClick={scrollToContact} className="btn btn-secondary">
              Let's Talk
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="hero-shape">
            <img src={profileImg} alt="Sirachat Maisuaydee" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};
