import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledBurgerWrap, BurgerButtonProps } from './BurgerButtonInterfaces';

const BurgerButton: FC<BurgerButtonProps> = ({ open, onClick, bgColor }: BurgerButtonProps) => {
  return (
    <BurgerWrap open={open} onClick={onClick} bgColor={bgColor}>
      <div />
      <div />
      <div />
    </BurgerWrap>
  );
};

const BurgerWrap = styled.div<StyledBurgerWrap>`
  position: fixed;
  cursor: pointer;
  z-index: 2;
  width: 2rem;
  height: 2rem;
  top: 15px;
  left: 20px;
  transform: rotate(180deg);
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ open, bgColor }) => (open ? '#fff' : bgColor)};
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default BurgerButton;
