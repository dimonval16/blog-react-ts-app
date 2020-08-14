import React, { FC } from 'react';
import styled from 'styled-components';
import { CreateCardProps } from './CreateCardIntefaces';

const CreateCard: FC<CreateCardProps> = ({ children }: CreateCardProps) => {
  return <CardWrap>{children}</CardWrap>;
};

const CardWrap = styled.div`
  width: 90%;
  max-width: 1250px;
  min-width: 260px;
  min-height: 400px;
  height: min-content;
  background-color: white;
  border-radius: 25px;
  box-shadow: 2px 6px 7px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default CreateCard;
