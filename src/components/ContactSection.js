import React from 'react';

const ContactSection = () => {
  
  return (
    <section id="contact" className="content">
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
            referrerPolicy="no-referrer-when-downgrade "
          />
        </figure>
      </div>
    </section>
  );
};

export default ContactSection;
