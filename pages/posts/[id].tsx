import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { TPost } from '../../types/TPost';
import {
	fetchPostById,
	setSelectedPostId
} from '../../components/PostItem/redux/actions';
import Spinner from '../../components/Spinner/Spinner';
import CommentList from '../../components/CommentList/CommentList';
import Header from '../../components/Header/Header';
import { createComment } from '../../components/PostItem/redux/actions';

interface IPostPageProps {
	selectedPost?: TPost;
	createComment?: (
		postId: string,
		body: string
	) => { type: string; payload: { postId: string; body: string } };
	selectedPostId?: string;
	isServer: boolean;
}

const PostTitle = styled.h1`
	text-align: center;
`;

const StyledPostPage = styled.div`
    margin: 0 25%;
    @media(max-width:900px){
        margin 0 5px;
    }
`;

const PostBody = styled.p`
	line-height: 24px;
	font-size: 20px;
`;

const CommentTitle = styled.h2`
	color: #8c8c8c;
	text-align: center;
	padding-bottom: 10px;
	border-bottom: 1px solid #8c8c8c;
`;

const PostPage: NextPage<IPostPageProps> = ({
	selectedPost,
	createComment,
	selectedPostId
}) => {
	return selectedPost && selectedPostId === selectedPost.id ? (
		<>
			<Header />
			<StyledPostPage>
				<PostTitle>{selectedPost.title}</PostTitle>
				<PostBody>{selectedPost.body}</PostBody>
				<CommentTitle>Comments</CommentTitle>
				<CommentList
					id={selectedPost.id}
					onCommentShare={createComment}
					comments={selectedPost.comments}
				/>
			</StyledPostPage>
		</>
	) : (
		<Spinner />
	);
};

PostPage.getInitialProps = async ctx => {
	await ctx.store.dispatch(fetchPostById(ctx.query.id as string));
	return { isServer: ctx.isServer };
};

const mapStateToProps = (rootState, props) => ({
	...props,
	selectedPost: rootState.postList.selectedPost,
	selectedPostId: rootState.postList.selectedPostId
});

const actions = {
	createComment
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostPage);
