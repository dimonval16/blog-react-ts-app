import React, { FC, useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { InitialStateType } from '../../redux/store/state';
import { PostPageProps, MapState, MapDispatch } from './PostPageInterfaces';
import BigCard from '../../components/create_card/CreateCard';
import Comments from '../../components/comments/Comments';
import { retrievePostAC, updatePostAC } from '../../redux/actions/one_post_actions/onePostActions';
import { createNewCommentAC } from '../../redux/actions/comments_action/commentsActions';

const PostPage: FC<PostPageProps> = ({
  postPageData,
  onGettingOnePost,
  match,
  onCommentAdd,
  onUpdatePost,
}: PostPageProps) => {
  const [editMode, setEditMode] = useState(false);
  const [postValues, setPostValues] = useState({ title: '', body: '' });

  useEffect(() => {
    onGettingOnePost(match.params.id);
  }, []);

  const handleCommentAdd = (title: string) => {
    onCommentAdd(title, postPageData.id);
  };

  const handleEditButtonClick = () => {
    setEditMode(!editMode);
  };

  const handleTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPostValues({ ...postValues, title: event.target.value });
  };

  const handleBodyValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPostValues({ ...postValues, body: event.target.value });
  };

  const handleEditSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const sendTitle = postValues.title ? postValues.title : postPageData.title;
    const sendBody = postValues.body ? postValues.body : postPageData.body;

    onUpdatePost(postPageData.id, sendTitle, sendBody);
    setEditMode(!editMode);
    setPostValues({ ...postValues, title: '', body: '' });
  };

  return (
    <PostPageWrap>
      <BigCard>
        <EditButton color={'#A5A4FF'} className="material-icons" onClick={handleEditButtonClick}>
          create
        </EditButton>
        {editMode ? (
          <StyledForm>
            <StyledInput defaultValue={postPageData.title} onChange={handleTitleValue} />
            <StyledInput defaultValue={postPageData.body} onChange={handleBodyValue} />
            <StyledButton onClick={handleEditSubmit}>Edit</StyledButton>
          </StyledForm>
        ) : (
          <>
            <Title>{postPageData.title}</Title>
            <Body>{postPageData.body}</Body>
          </>
        )}
        <Comments comments={postPageData.comments} onCommentAdd={handleCommentAdd} />
      </BigCard>
    </PostPageWrap>
  );
};

const mapState = (state: InitialStateType): MapState => ({
  postPageData: state.postPageData,
});

const mapDispatch = (dispatch: Dispatch): MapDispatch => ({
  onGettingOnePost: (id: string | number) => dispatch<any>(retrievePostAC(id)),
  onCommentAdd: (title: string, postId: string | number) => dispatch<any>(createNewCommentAC(title, postId)),
  onUpdatePost: (id, title, body) => dispatch<any>(updatePostAC(id, title, body)),
});

const PostPageWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`;

const Body = styled.span`
  margin: 20px 5%;
  font-size: 1.2rem;
`;

const EditButton = styled.span`
  position: absolute;
  top: 20px;
  right: 5%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ color }) => color};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1020px;
  margin: 30px 0;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid #a5a4ff;
  border-radius: 0;
  margin-bottom: 40px;
  outline: none;
  height: 60px;
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  cursor: pointer;
  height: 60px;
  max-width: 500px;
  width: 100%;
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
`;

export default connect(mapState, mapDispatch)(PostPage);
