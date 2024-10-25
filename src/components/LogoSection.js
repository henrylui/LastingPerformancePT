import React from 'react';
import styled from 'styled-components';

const LogoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem 2rem;
  background-color: black;
  width: 100%;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const BookingButton = styled.a`
  display: inline-block;
  background: #ccab44;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background: #b39339;
  }
`;

const LogoSection = () => {
  return (
    <LogoSectionWrapper>
      <Logo src="/logo.png" alt="Lasting Performance PT Logo" />
      <BookingButton 
        href="https://lastingperformancept.janeapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book an Appointment
      </BookingButton>
    </LogoSectionWrapper>
  );
};

export default LogoSection;
