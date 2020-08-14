import React, { FC, useState, ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { CommentsProps } from './CommentsInterfaces';

const Comments: FC<CommentsProps> = ({ comments, onCommentAdd }: CommentsProps) => {
  const [commentValue, setCommentValue] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (commentValue) {
      onCommentAdd(commentValue);
      setCommentValue('');
    }
  };

  return (
    <CommentsWrap>
      <Title>Comments:</Title>
      <StyledForm>
        <StyledInput color={'#a5a4ff'} type="text" value={commentValue} onChange={handleInput} />
        <StyledButton onClick={handleSubmit}>Create</StyledButton>
      </StyledForm>
      <CommentsList>
        {comments.map((comment) => (
          <ListItem key={comment.id}>{comment.body}</ListItem>
        ))}
      </CommentsList>
    </CommentsWrap>
  );
};

const CommentsWrap = styled.div`
  align-self: flex-start;
  margin-left: 5%;
  width: 90%;
`;

const Title = styled.span`
  font-weight: bold;
`;

const CommentsList = styled.ul`
  padding: 0;
  margin: 30px 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #a5a4ff;
  border-radius: 10px;
  color: white;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${({ color }) => color};
  border-radius: 0;
  margin-right: 20px;
  outline: none;
  height: 60px;
  font-size: 1.2rem;
  flex: 1;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1020px;

  @media (max-width: 420px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  height: 60px;
  width: 150px;
  border-radius: 30px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: #4f35b9;
  outline: none;
  align-self: center;

  &:active {
    opacity: 0.8;
  }

  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

export default Comments;
