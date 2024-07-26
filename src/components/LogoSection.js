import React from 'react';
import styled from 'styled-components';

const LogoSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background-color: black;
  width: 100%;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const LogoSection = () => {
  return (
    <LogoSectionWrapper>
      <Logo src="/logo.png" alt="Lasting Performance PT Logo" />
    </LogoSectionWrapper>
  );
};

export default LogoSection;