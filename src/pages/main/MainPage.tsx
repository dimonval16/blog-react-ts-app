import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { InitialStateType } from '../../redux/store/state';
import Card from '../../components/card/Card';
import { MapState, MapDispatch, MainPageProps, Post } from './MainPageInterface';
import { getAllPostsAC } from '../../redux/actions/posts_actions/postsActions';
import { deletePostAC, retrievePostAC } from '../../redux/actions/one_post_actions/onePostActions';

const MainPage: FC<MainPageProps> = ({
  colorTheme,
  getAllPosts,
  mainPageData,
  onPostDelete,
  history,
  onGettingOnePost,
}: MainPageProps) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  const handleCardClick = (id: string | number) => {
    onGettingOnePost(id);
    history?.push(`/posts/${id}`);
  };

  return (
    <MainWrap>
      {mainPageData.posts.map((item: Post) => (
        <Card
          key={item.id}
          activeColor={colorTheme.secondaryBackground}
          title={item.title}
          body={item.body}
          onDelete={() => onPostDelete(item.id)}
          onCardClick={() => handleCardClick(item.id)}
        />
      ))}
    </MainWrap>
  );
};

const mapState = (state: InitialStateType): MapState => ({
  colorTheme: state.colorTheme,
  mainPageData: state.mainPageData,
});

const mapDispatch = (dispatch: Dispatch): MapDispatch => ({
  getAllPosts: () => dispatch<any>(getAllPostsAC()),
  onPostDelete: (id: string | number) => dispatch<any>(deletePostAC(id)),
  onGettingOnePost: (id: string | number) => dispatch<any>(retrievePostAC(id)),
});

const MainWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default connect(mapState, mapDispatch)(MainPage);
