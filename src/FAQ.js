import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "Where is Lasting Performance and Physical Therapy located?",
      answer: "We are conveniently located at 4151 E County Line Road, Unit B, Centennial, CO 80122."
    },
    {
      question: "Do you accept insurance?",
      answer: "We operate as a cash-based, out-of-network provider. This means we don't have direct contracts with insurance companies. Payment is expected at the time of service. However, if your insurance plan includes out-of-network benefits, we can provide you with a Superbill to submit for potential reimbursement. We also accept HSA, HRA, and FSA payments for eligible out-of-pocket medical expenses."
    },
    {
      question: "Why do you choose to be cash-based?",
      answer: "By not entering into contracts with insurance companies, we can maintain lower costs and focus on providing high-quality, one-on-one care to our patients. This model often results in fewer required visits and may lead to lower overall out-of-pocket costs compared to in-network providers."
    },
    {
      question: "Is a doctor's referral required to see a physical therapist at your clinic?",
      answer: "No, a doctor's referral is not necessary. Colorado is a direct-access state, allowing you to see a physical therapist without a physician's referral. This can often save you time and money."
    },
    {
      question: "Can you order diagnostic imaging if needed?",
      answer: "Yes, licensed physical therapists in Colorado have the authority to order diagnostic imaging, including X-rays and MRIs."
    },
    {
      question: "How frequently will I need to attend physical therapy sessions?",
      answer: (
        <>
          <p>The frequency of your visits depends on your specific condition and goals. Here's a general guideline:</p>
          <ul>
            <li>Acute or debilitating conditions: Weekly sessions</li>
            <li>Less severe diagnoses: Every 2-3 weeks</li>
            <li>Preventative care or maintenance: Monthly or as needed</li>
          </ul>
          <p>We'll discuss and customize a treatment schedule that best suits your needs during your initial visit.</p>
        </>
      )
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