import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
  const heroRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="App">
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <LazyLoadImage
                alt="Lasting Performance PT Logo"
                src="/logo.png"
                effect="blur"
                height={80}
              />
              <span className="company-name">Lasting Performance and Physical Therapy</span>
            </div>
            <nav>
              <ul>
                <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} duration={500} offset={-100}>About</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <Element name="hero">
        <section id="hero" className="hero" ref={heroRef}>
          <div className="container">
            <h1>Empowering Your Journey to Healing</h1>
            <div className={`schedule-button ${isSticky ? 'sticky' : ''}`}>
              <a href="https://lastingperformancept.janeapp.com" className="btn">Schedule Now</a>
            </div>
          </div>
        </section>
      </Element>

      <Element name="about">
        <section id="about" className="content">
          <div className="container">
            <div className="about-content">
              <LazyLoadImage
                alt="Dr. Linda Nguyen"
                src="/linda.png"
                effect="blur"
                className="about-image"
              />
              <div className="about-text">
                <h2>About Dr. Linda Nguyen</h2>
                <h3>Physical Therapy, Telehealth Physical Therapy</h3>
                <h4>Dr. Linda Nguyen, PT, DPT</h4>
                <p><em>Owner │ Running Specialist │ Functional Dry Needling Certified │ Sports and Orthopedic Physical Therapist</em></p>
                <p>Dr. Linda Nguyen, PT, DPT, is a dedicated physical therapist with a strong academic background and a passion for empowering individuals to achieve optimal physical well-being. Graduating with honors in 2021 from the University of Colorado Anschutz Medical Campus with a Doctor of Physical Therapy degree, she built upon her foundation in Integrative Biology and Psychology from the University of Colorado at Denver, where she also graduated with honors in 2018.</p>
                <p>As a first-generation Colorado native, Dr. Nguyen values diligence and consistency instilled in her from assisting her immigrant parents in managing their small business. She is committed to implementing evidence-based practices, specializing in orthopedic conditions and employing a holistic approach integrating movement, exercise, and manual therapy techniques.</p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="contact">
        <section id="contact" className="content">
          <div className="container">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <address>
                Phone: <a href="tel:720-772-9090">(720) 772-9090</a><br />
                Email: <a href="mailto:liindaanguyen@gmail.com">liindaanguyen@gmail.com</a><br />
                4151 E County Line Road, Unit B<br />
                Centennial, CO 80122<br />
                United States
              </address>
            </div>
          </div>
        </section>
      </Element>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="copyright">
              © 2024 Lasting Performance and Physical Therapy. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;