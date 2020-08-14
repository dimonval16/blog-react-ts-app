import React, { FC, useState, ChangeEvent, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { InitialStateType } from '../../redux/store/state';
import { MapState, CreatePostPageProps, StyledButtonI, MapDispatch } from './CreatePostPageInterfaces';
import CreateCard from '../../components/create_card/CreateCard';
import { createNewPostAC } from '../../redux/actions/one_post_actions/onePostActions';

const CreatePostPage: FC<CreatePostPageProps> = ({ colorTheme, onCreatingNewPost, history }: CreatePostPageProps) => {
  const [formValues, setFormValues] = useState({ title: '', body: '' });

  const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, title: event.target.value });
  };

  const handleBodyInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, body: event.target.value });
  };

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (formValues.title && formValues.body) {
      onCreatingNewPost(formValues);
      history?.push('/');
    }
  };

  return (
    <CreatePageWrap>
      <CreateCard>
        <StyledForm>
          <Label color={colorTheme.primaryHeadColor}>Title</Label>
          <StyledInput
            color={colorTheme.secondaryBackground}
            type="text"
            value={formValues.title}
            onChange={handleTitleInput}
          />
          <Label color={colorTheme.primaryHeadColor}>Description</Label>
          <StyledInput
            color={colorTheme.secondaryBackground}
            type="text"
            value={formValues.body}
            onChange={handleBodyInput}
          />
          <StyledButton
            bgColor={colorTheme.primaryHeadColor}
            color={colorTheme.secondaryTextColor}
            onClick={handleFormSubmit}
          >
            Submit
          </StyledButton>
        </StyledForm>
      </CreateCard>
    </CreatePageWrap>
  );
};

const mapState = (state: InitialStateType): MapState => ({
  colorTheme: state.colorTheme,
});

const mapDispatch = (dispatch: Dispatch): MapDispatch => ({
  onCreatingNewPost: (formValues) => dispatch<any>(createNewPostAC(formValues)),
});

const CreatePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1020px;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${({ color }) => color};
  border-radius: 0;
  margin-bottom: 40px;
  outline: none;
  height: 60px;
  font-size: 1.2rem;
`;

const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ color }) => color};
`;

const StyledButton = styled.button<StyledButtonI>`
  cursor: pointer;
  height: 60px;
  max-width: 500px;
  width: 100%;
  border-radius: 30px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  outline: none;
  align-self: center;

  &:active {
    opacity: 0.8;
  }
`;

export default connect(mapState, mapDispatch)(CreatePostPage);
