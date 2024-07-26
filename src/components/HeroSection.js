import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroButton = styled.a`
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

const HeroSection = ({ backgroundImage, heroRef }) => {
  return (
    <HeroWrapper id="hero" backgroundImage={backgroundImage} ref={heroRef}>
      <HeroContent>
        <HeroTitle>Empowering Your Journey to Healing</HeroTitle>
        <HeroButton href="https://lastingperformancept.janeapp.com">
          Schedule Now
        </HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;