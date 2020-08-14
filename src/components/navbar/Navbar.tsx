import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { InitialStateType } from '../../redux/store/state';
import { MapState, NavbarProps, PageLink, StyledNavWrap, StyledNavList } from './NavbarInterfaces';
import BurgerButton from '../burger_button/BurgerButton';

const Navbar: FC<NavbarProps> = ({ navbarData, colorTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <NavWrap backgroundColor={colorTheme.secondaryBackground}>
      <BurgerButton open={open} onClick={() => setOpen(!open)} bgColor={colorTheme.secondaryBackground} />

      <NavList open={open} backgroundColor={colorTheme.secondaryBackground}>
        {navbarData.pageLinks.map((item: PageLink) => (
          <ListItem key={item.id}>
            <StyledNavLink
              exact
              to={item.link}
              color={colorTheme.secondaryTextColor}
              activeStyle={{ fontSize: '1.4rem', color: colorTheme.primaryHeadColor }}
            >
              {item.title}
            </StyledNavLink>
          </ListItem>
        ))}
      </NavList>
    </NavWrap>
  );
};

const mapState = (state: InitialStateType): MapState => ({
  navbarData: state.navbarData,
  colorTheme: state.colorTheme,
});

const mapDispatch = () => ({});

const NavWrap = styled.nav<StyledNavWrap>`
  position: fixed;
  height: 70px;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0);
    box-shadow: none;
  }
`;

const NavList = styled.ul<StyledNavList>`
  padding: 0;
  margin: 0 0 0 5%;
  width: 220px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${({ backgroundColor }) => backgroundColor};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-105%)')};
    transition: transform 0.2s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 70px 0 0 30px;
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.2);
  }
`;

const ListItem = styled.li`
  list-style-type: none;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration-line: none;
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default connect(mapState, mapDispatch)(Navbar);
