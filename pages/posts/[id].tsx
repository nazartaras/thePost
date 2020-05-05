import { NextPage } from 'next';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TPost } from '../../types/TPost';
import { FETCH_POST_BY_ID } from '../../components/PostList/redux/actionTypes';
import Spinner from '../../components/Spinner/Spinner';
import CommentList from '../../components/CommentList/CommentList';

interface IPostPageProps {
    selectedPost?: TPost;
    isServer: boolean;
}

const PostTitle = styled.h1`
    text-align: center;
`

const StyledPostPage = styled.div`
    margin: 0 25%;
`

const PostBody = styled.p`
    line-height: 24px;
    font-size: 20px;
`

const CommentTitle = styled.h2`
    color: #8c8c8c;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #8c8c8c;
`

const PostPage: NextPage<IPostPageProps> = ({ selectedPost, isServer }) => {
    const currId = location.pathname.split('/')[2];
    return selectedPost && selectedPost.id.toString() === currId ? <StyledPostPage>
        <PostTitle>{selectedPost.title}</PostTitle>
        <PostBody>{selectedPost.body}</PostBody>
        <CommentTitle>Comments</CommentTitle>
        <CommentList comments={selectedPost.comments} />
    </StyledPostPage> : <Spinner />
}

PostPage.getInitialProps = async (ctx) => {
    await ctx.store.dispatch({ type: FETCH_POST_BY_ID, payload: ctx.query.id })
    return { isServer: ctx.isServer }
};

const mapStateToProps = (rootState, props) => ({
    ...props,
    selectedPost: rootState.postList.selectedPost
});

export default connect(mapStateToProps)(PostPage);