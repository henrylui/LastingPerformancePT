import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${props => props.isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(5px)' : 'none'};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem 1rem;
  }
`;

const CompanyName = styled.h1`
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const NavContainer = styled.nav`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavItem = styled.li`
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const NavLink = styled(ScrollLink)`
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: -0.2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    color: #ccab44;
  }

  &.active {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <HeaderContent>
        <CompanyName>
          Lasting Performance and Physical Therapy
        </CompanyName>
        <NavContainer>
          <NavList>
            <NavItem>
              <NavLink to="hero" smooth={true} duration={500} spy={true} activeClass="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about" smooth={true} duration={500} spy={true} activeClass="active">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="faq" smooth={true} duration={500} spy={true} activeClass="active">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</NavLink>
            </NavItem>
          </NavList>
        </NavContainer>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;