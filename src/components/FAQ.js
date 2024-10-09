import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "Where is Lasting Performance and Physical Therapy located?",
      answer: "We are conveniently located at 4151 E County Line Road, Unit B, Centennial, CO 80122."
    },
    {
      question: "Is a doctor's referral required to see a physical therapist at your clinic?",
      answer: "No, a doctor's referral is not necessary. Colorado is a direct-access state, allowing you to see a physical therapist without a physician's referral. This can often save you time and money."
    },
    {
      question: "Can you order diagnostic imaging if needed?",
      answer: "Yes, licensed physical therapists in Colorado have the authority to order diagnostic imaging, including X-rays and MRIs."
    }
  ];

  return (
    <section id="faq" className="content">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.question}</h3>
              <div className="faq-answer">
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;