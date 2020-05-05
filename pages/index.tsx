import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';
import PostList from '../components/PostList/PostList';
import { IPost } from '../components/PostList/IPost';
import { FETCH_POSTS } from '../components/PostList/redux/actionTypes';
import Spinner from '../components/Spinner/Spinner';
interface IMainProps {
    posts?: Array<IPost>
}
const Main: NextPage<IMainProps> = ({ posts }) => {
    return posts?<div>
        <PostList posts={posts} />
    </div>:<Spinner/>
}
interface IMyContext extends NextPageContext {
    fetchPosts: () => any;
    posts: any;
}

Main.getInitialProps = async ({ store, posts, isServer, fetchPosts }: IMyContext) => {
    console.log(posts);
    await store.dispatch({ type: FETCH_POSTS })
    return {};
};

const mapStateToProps = (rootState, props) => ({
    ...props,
    posts: rootState.postList.posts
});

export default connect(mapStateToProps)(Main);