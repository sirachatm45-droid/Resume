import React from 'react';
import { Mail, Phone } from 'lucide-react';


export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In Touch</h2>

      <div className="glass contact-single-card">
        <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
          Let's build something new together
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', marginInline: 'auto' }}>
          Feel free to reach out for collaborations, job opportunities, or just a friendly chat!
        </p>

        <div className="contact-info-grid">
          {/* Email Card */}
          <a href="mailto:Sirachat.m45@gmail.com" className="contact-item-link">
            <div className="contact-item-box">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">Sirachat.m45@gmail.com</span>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:098-079-0547" className="contact-item-link">
            <div className="contact-item-box">
              <div className="contact-icon-wrapper">
                <Phone size={24} />
              </div>
              <span className="contact-item-label">Phone</span>
              <span className="contact-item-value">098-079-0547</span>
            </div>
          </a>


        </div>
      </div>
    </section>
  );
};
