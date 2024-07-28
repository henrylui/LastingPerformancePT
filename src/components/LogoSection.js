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

const IframeWrapper = styled.div`
  margin-top: 1rem;
`;

const LogoSection = () => {
  return (
    <LogoSectionWrapper>
      <Logo src="/logo.png" alt="Lasting Performance PT Logo" />
      <IframeWrapper
        dangerouslySetInnerHTML={{
          __html: `
            <iframe 
              frameborder='0' 
              height='28' 
              scrolling='no' 
              src='https://lastingperformancept.janeapp.com/embed/book_online' 
              width='177'
            ></iframe>
          `
        }}
      />
    </LogoSectionWrapper>
  );
};

export default LogoSection;