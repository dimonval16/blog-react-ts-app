import React, { FC } from 'react';
import styled from 'styled-components';
import { CardProps } from './CardInterfaces';

const Card: FC<CardProps> = ({ activeColor, title, body, onDelete, onCardClick }: CardProps) => {
  return (
    <CardWrap>
      <CardMarker color={activeColor} />
      <DeleteIcon color={activeColor} className="material-icons" onClick={onDelete}>
        delete
      </DeleteIcon>
      <ContentWrap onClick={onCardClick}>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </ContentWrap>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 280px;
  min-width: 260px;
  height: 320px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 2px 6px 7px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  overflow: hidden;
  position: relative;
`;

const CardMarker = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({ color }) => color};
  border-radius: 50px 50px 0 0;
`;

const ContentWrap = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin: 20px;
`;

const Body = styled.span`
  display: block;
  width: 90%;
  max-height: 130px;
`;

const DeleteIcon = styled.span`
  align-self: flex-end;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ color }) => color};
  }
`;

export default Card;
