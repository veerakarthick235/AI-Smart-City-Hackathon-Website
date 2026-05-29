import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Lightbulb, Users, TrendingUp, Award, Globe, Code } from 'lucide-react';
import styles from './about.module.css';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | Innovation Hacks',
  description: 'Innovation Hacks is a global hackathon platform building the future through competitive innovation events.',
};

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.54 6.5-7a5.2 5.2 0 0 0-1.5-3.8 4.8 4.8 0 0 0 .1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a4.8 4.8 0 0 0 .1 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function AboutPage() {
  const values = [
    { icon: <Lightbulb size={32} />, title: 'Innovation', desc: 'Pushing the boundaries of what is possible with modern technology.' },
    { icon: <Users size={32} />, title: 'Community', desc: 'Connecting diverse talents to build collaborative solutions.' },
    { icon: <TrendingUp size={32} />, title: 'Impact', desc: 'Focusing on projects that create real-world positive change.' },
    { icon: <Award size={32} />, title: 'Excellence', desc: 'Setting the highest standards for technical implementation.' },
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className="section-label">Our Story</span>
              <h1 className="gradient-text">About Innovation Hacks</h1>
              <p className={styles.heroSubtitle}>
                Empowering the next generation of innovators to build a world where technology solves humanity's greatest challenges.
              </p>
            </div>
          </div>
          <div className={styles.heroBg} />
        </section>

        {/* Mission & Vision */}
        <section className={`section ${styles.missionSection}`}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={`glass-card ${styles.missionCard}`}>
                <h3>Our Mission</h3>
                <p>
                  To democratize innovation by providing a world-class platform where developers, designers, and visionaries can collaborate on transformative projects. We believe that the best ideas are born when diverse perspectives unite under the pressure of a hackathon.
                </p>
              </div>
              <div className={`glass-card ${styles.missionCard}`}>
                <h3>Our Vision</h3>
                <p>
                  To become the global nexus for technological problem-solving. We envision a future where Innovation Hacks events are the birthplace of startups and solutions that redefine urban living, healthcare, and environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={`section ${styles.statsSection}`}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <Globe size={40} className={styles.statIcon} />
                <AnimatedCounter end={20} suffix="+" />
                <span>Countries Reached</span>
              </div>
              <div className={styles.statItem}>
                <Users size={40} className={styles.statIcon} />
                <AnimatedCounter end={87} suffix="+" />
                <span>Total Participants</span>
              </div>
              <div className={styles.statItem}>
                <Code size={40} className={styles.statIcon} />
                <AnimatedCounter end={45} suffix="+" />
                <span>Projects Submitted</span>
              </div>
              <div className={styles.statItem}>
                <Award size={40} className={styles.statIcon} />
                <AnimatedCounter end={15} />
                <span>Global Events</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <div className="container">
            <SectionHeading label="Values" title="What Drives Us" />
            <div className={styles.valuesGrid}>
              {values.map((val, i) => (
                <div key={i} className={`glass-card ${styles.valueCard}`}>
                  <div className={styles.valueIcon}>{val.icon}</div>
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className={`section ${styles.leadershipSection}`}>
          <div className="container">
            <SectionHeading label="Leadership" title="Meet The Founder" />
            <div className={`glass-card ${styles.leaderCard}`}>
              <div className={styles.leaderAvatar}>
                <img 
                  src="/images/team/veera_karthick.jpeg" 
                  alt="Karthickkumar S" 
                  className={styles.leaderImage} 
                />
              </div>
              <div className={styles.leaderInfo}>
                <h3>Karthickkumar S</h3>
                <span className="badge badge-primary">Founder & Organizer</span>
                <p>
                  Karthickkumar founded Innovation Hacks with a simple premise: the world's most pressing challenges require the brightest minds working together without boundaries. With a background in AI and scalable systems, Veera has grown the platform from a local university event to a global phenomenon, focusing on creating premium, enterprise-grade experiences for hackers and sponsors alike.
                </p>
                <div className={styles.socialLinks}>
                  <a href={SITE_CONFIG.url} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <Globe size={20} />
                  </a>
                  <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <Github size={20} />
                  </a>
                  <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <Linkedin size={20} />
                  </a>
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: 24 }}>Ready to build the future?</h2>
            <a href="/" className="btn btn-primary btn-lg">Explore Upcoming Events</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
