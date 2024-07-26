import React from 'react';
import styled from 'styled-components';

const LogoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem 2rem; // Added top padding
  background-color: black;
  width: 100%;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem; // Add space between logo and button

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const ScheduleButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #ccab44;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b39339;
  }
`;

const LogoSection = () => {
  return (
    <LogoSectionWrapper>
      <Logo src="/logo.png" alt="Lasting Performance PT Logo" />
      <ScheduleButton href="https://lastingperformancept.janeapp.com">
        Book an Appointment
      </ScheduleButton>
    </LogoSectionWrapper>
  );
};

export default LogoSection;