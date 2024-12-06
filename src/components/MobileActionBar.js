import React from 'react';
import styled from 'styled-components';

const ActionBarContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 12px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
`;

const ActionButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

const CallButton = styled(ActionButton)`
  background: #2a8d8d;
  color: white;
`;

const BookButton = styled(ActionButton)`
  background: #ccab44;
  color: white;
`;

const MobileActionBar = () => {
  return (
    <ActionBarContainer>
      <CallButton href="tel:720-772-9090" aria-label="Call now">
        Call Now
      </CallButton>
      <BookButton 
        href="https://lastingperformancept.janeapp.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book appointment"
      >
        Book Now
      </BookButton>
    </ActionBarContainer>
  );
};

export default MobileActionBar; 