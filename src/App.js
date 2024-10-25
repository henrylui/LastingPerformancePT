import React, { useEffect, useRef, useState } from 'react';
import { Events, scrollSpy } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';
import FAQ from './components/FAQ';
import Header from './Header';
import LogoSection from './components/LogoSection';
import TestimonialComponent from './components/TestimonialSection';
import ContactSection from './components/ContactSection';

const MainContent = styled.main.attrs({
  'aria-label': 'Main content'
})`
  padding-top: 60px; // Adjust this value based on your header's height
  
  @media (max-width: 768px) {
    padding-top: 100px; // Increase padding for mobile to account for the two-line header
  }
`;

function App() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Initialize scrollSpy
    scrollSpy.update();

    // Set up react-scroll events
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Update the cleanup
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.content').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Ensure content is loaded after component mounts
    setIsContentLoaded(true);
  }, []);

  return (
    <div className="App" role="application">
      <Header />
      <LogoSection />
      
      <article 
        id="about" 
        className="content"
        role="article"
        aria-label="About Dr. Linda Nguyen"
      >
        <div className="container">
          <div className="about-content">
            <figure>
              <picture>
                <source srcSet="/linda.avif" type="image/avif" />
                <source srcSet="/linda.webp" type="image/webp" />
                <LazyLoadImage
                  alt="Dr. Linda Nguyen"
                  src="/linda.png"
                  effect="blur"
                  className="about-image"
                  loading="eager"
                  fetchpriority="high"
                  placeholderSrc="/linda.avif"
                />
              </picture>
            </figure>
            <div className="about-text">
              <h2>About Dr. Linda Nguyen</h2>
              <h3>Physical Therapy, Telehealth Physical Therapy</h3>
              <h4>Dr. Linda Nguyen, PT, DPT</h4>
              <p><em>Owner │ Running Specialist │ Functional Dry Needling Certified │ Sports and Orthopedic Physical Therapist</em></p>
              <p>Dr. Linda Nguyen, PT, DPT, is a dedicated physical therapist with a strong academic background and a passion for empowering individuals to achieve optimal physical well-being. Graduating with high academic achievements in 2021 from the University of Colorado Anschutz Medical Campus with a Doctor of Physical Therapy degree, she built upon her foundation in Integrative Biology and Psychology, from which she graduated with honors in 2018 at the University of Colorado Denver.</p>
              <p>As a first-generation Colorado native, Dr. Nguyen values diligence and consistency instilled in her from assisting her immigrant parents in managing their small business. She is committed to implementing evidence-based practices, specializing in orthopedic conditions and employing a holistic approach integrating movement, exercise, and manual therapy techniques.</p>
              <p>Dr. Nguyen has worked with a diverse range of clients, from professional athletes including NFL athletes to aspiring Olympians, leveraging her expertise to optimize performance and recovery. Beyond the clinic, Dr. Nguyen actively engages with the community through her passion for running, serving as the Founder, President, and Captain of the Cross Country club at the University of Colorado, fostering a sense of community and promoting an active lifestyle. She participates in various physical activities such as running marathons, biking, playing tennis, swimming, playing pickleball, and weightlifting, embodying the values of health and fitness she advocates for.</p>            
              <p>Eager to contribute to her community's well-being, Dr. Nguyen is dedicated to guiding individuals towards independence and optimal physical function, prioritizing patient education and establishing meaningful connections. Her dedication to physical therapy and commitment to patient wellness make her a valuable asset to those seeking personalized and effective care.</p>
                    
            </div>
          </div>
        </div>
      </article>

      <FAQ />
      <TestimonialComponent />
      <ContactSection />

      <footer role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="copyright">
              © 2024 Lasting Performance and Physical Therapy. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      <nav className="fab-container" aria-label="Quick actions">
        <a 
          href="https://lastingperformancept.janeapp.com" 
          className="fab" 
          aria-label="Schedule appointment now"
        >
          <span aria-hidden="true">+</span>
        </a>
      </nav>
      
    </div>
  );
}

export default App;
