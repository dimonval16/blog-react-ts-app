import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MainPage from './pages/main/MainPage';
import CreatePostPage from './pages/create_new/CreatePostPage';
import PostPage from './pages/post/PostPage';

const App: FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/posts/new" component={CreatePostPage} />
          <Route path="/posts/:id" component={PostPage} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
