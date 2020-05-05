import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { TPost } from '../types/TPost';
import { FETCH_POSTS } from '../components/PostList/redux/actionTypes';
import Spinner from '../components/Spinner/Spinner';
import Header from '../components/Header/Header';
import PostItem from '../components/PostItem/PostItem';

interface IMainProps {
    posts?: TPost[];
    isServer: boolean;
}

export const isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const StyledPostList = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    margin: 0px 25%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media(max-width:900px){
        margin 0 5px;
    }
`;

const CreatePost = styled.a`
    text-align:center;
    background-color: #9785f2;
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
    padding: 7px;
    border-radius:8px;
    font-family: 'Pacifico', cursive;
    transition: all .5s ease;

    &:hover{
        cursor:pointer;
        background-color: #7467b5;
    }
`;
const PostList: NextPage<IMainProps> = ({ posts }) => {
    const generatePost = posts.map((el) => <PostItem key={el.id} post={el} />);
    return posts ? (
        <>
            <Header />
            <StyledPostList>
                <Link href="/posts/new">
                    <CreatePost>Create new post</CreatePost>
                </Link>
                {generatePost}
            </StyledPostList>
        </>
    ) : <Spinner />;
};

PostList.getInitialProps = async ({ store, req }) => {
    const isServer = !!req;
    await store.dispatch({ type: FETCH_POSTS });
    return { isServer };
};

const mapStateToProps = (rootState, props) => ({
    ...props,
    posts: rootState.postList.posts,
});

export default connect(mapStateToProps)(PostList);
