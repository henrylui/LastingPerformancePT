import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';
import FAQ from './components/FAQ';
import Header from './Header';
import LogoSection from './components/LogoSection';
import TestimonialComponent from './components/TestimonialSection';

const MainContent = styled.main.attrs({
  'aria-label': 'Main content'
})`
  padding-top: 60px; // Adjust this value based on your header's height
  
  @media (max-width: 768px) {
    padding-top: 100px; // Increase padding for mobile to account for the two-line header
  }
`;

const ContactSection = styled.section.attrs({
  role: 'region',
  'aria-label': 'Contact information'
})`
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }

  .contact-info {
    text-align: left;
    max-width: 400px;
    width: 100%;
  }

  .map-container {
    width: 100%;
    max-width: 400px;
    height: 300px;
  }

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .map-container {
      margin-top: 1rem;
    }
  }
`;

function App() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Set up react-scroll events
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
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

      <ContactSection id="contact" className="content">
        <div className="container">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <address>
              Phone: <a href="tel:720-772-9090">(720) 772-9090</a><br />
              Email: <a href="mailto:linda@lastingperformancept.com">linda@lastingperformancept.com</a><br />
              Location: Colorado Fitness Headquarters <br />
              4151 E County Line Road, Unit B<br />
              Centennial, CO 80122<br />
              United States<br />
              <a href="https://maps.app.goo.gl/hVKhabfL4UKP8VPK6" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </address>
          </div>
          <figure className="map-container">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d732.4988462128213!2d-104.94032989152596!3d39.56717583183225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c83da65174af7%3A0xab0fb2033962c8b4!2sLasting%20Performance%20and%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1728446996617!5m2!1sen!2sus"        width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </figure>
        </div>
      </ContactSection>

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
