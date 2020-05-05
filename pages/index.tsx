import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { TPost } from '../types/TPost';
import { FETCH_POSTS } from '../components/PostList/redux/actionTypes';
import Spinner from '../components/Spinner/Spinner';

interface IMainProps {
    posts?: Array<TPost>
}

const StyledPostList = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    margin: 0px 25%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media(max-width:900px){
        margin 0 5px;
    }
`

const StyledPostItem = styled.a`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 0 5px #8c8c8c;
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.01);
        cursor: pointer;
    }
`

const PostItemTitle = styled.h3`
    text-align:center;
`
const PostItemBody = styled.p`
    position:relative;
    line-height: 16px;
    max-height: calc(3 * 16px);
    overflow: hidden;
    padding-right: 8px;
    color: #8c8c8c;

    &:after{
        content: "";
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 30%;
        height: 15px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
    }
`

const PostItemHeader = styled.div`
    height:30px;
    padding: 5px;
    border-bottom: 1px solid #8c8c8c;
    display: flex;
    align-items:center;
`

const UserAvatar = styled.img`
    height: 30px;
    width: 30px;
    boder-radius: 50%;
    margin-right: 10px;
`

const UserName = styled.span`
`

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
`
const PostList: NextPage<IMainProps> = ({ posts }) => {
    return posts ? <StyledPostList>
        <Link href="/posts/new">
            <CreatePost>Create new post</CreatePost>
        </Link>
        {
            posts.map(el =>
                <Link key={el.id as React.ReactText} href="/posts/[id]" as={`/posts/${el.id}`}>
                    <StyledPostItem>
                        <PostItemHeader>
                            <UserAvatar src='/user.png'></UserAvatar>
                            <UserName>Bill Morigan</UserName>
                        </PostItemHeader>
                        <PostItemTitle>{el.title}</PostItemTitle>
                        <PostItemBody>{el.body}</PostItemBody>
                    </StyledPostItem>
                </Link>
            )
        }
    </StyledPostList> : <Spinner />
}
interface IMyContext extends NextPageContext {
    fetchPosts: () => any;
    posts: any;
}

PostList.getInitialProps = async ({ store, posts, isServer, fetchPosts }: IMyContext) => {
    await store.dispatch({ type: FETCH_POSTS })
    return {};
};

const mapStateToProps = (rootState, props) => ({
    ...props,
    posts: rootState.postList.posts
});

export default connect(mapStateToProps)(PostList);