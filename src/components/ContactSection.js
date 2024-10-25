import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContactSectionWrapper = styled.section.attrs({
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
    background: #f5f5f5;
    position: relative;
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

  iframe {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  iframe.loaded {
    opacity: 1;
  }

  iframe.loading {
    opacity: 0;
  }
`;

const ContactSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Remove the timeout and use the iframe's onLoad event instead
    setIsMapLoaded(true);
  }, []);

  return (
    <ContactSectionWrapper id="contact" className="content">
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d732.4988462128213!2d-104.94032989152596!3d39.56717583183225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c83da65174af7%3A0xab0fb2033962c8b4!2sLasting%20Performance%20and%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1728446996617!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsMapLoaded(true)}
            className={isMapLoaded ? 'loaded' : 'loading'}
          />
        </figure>
      </div>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
