import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { TPost } from '../types/TPost';
import {
	fetchPosts,
	setSelectedPostId
} from '../components/PostItem/redux/actions';
import Spinner from '../components/Spinner/Spinner';
import Header from '../components/Header/Header';
import PostItem from '../components/PostItem/PostItem';

interface IMainProps {
	posts?: TPost[];
	setSelectedPostId?: (
		postId: string
	) => { type: string; payload: { postId: string } };
	isServer: boolean;
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
`;

const CreatePost = styled.a`
	text-align: center;
	background-color: #9785f2;
	color: white;
	font-size: 24px;
	margin-bottom: 20px;
	padding: 7px;
	border-radius: 8px;
	font-family: 'Pacifico', cursive;
	transition: all 0.5s ease;

	&:hover {
		cursor: pointer;
		background-color: #7467b5;
	}
`;
const PostList: NextPage<IMainProps> = ({ posts, setSelectedPostId }) => {
	const generatePost = posts
		? posts.map(el => (
				<PostItem onSelect={setSelectedPostId} key={el.id} post={el} />
		  ))
		: null;
	return generatePost ? (
		<>
			<Header />
			<StyledPostList>
				<Link href="/posts/new">
					<CreatePost>Create new post</CreatePost>
				</Link>
				{generatePost}
			</StyledPostList>
		</>
	) : (
		<Spinner />
	);
};

PostList.getInitialProps = async ({ store, req }) => {
	const isServer = !!req;
	await store.dispatch(fetchPosts());
	return { isServer };
};

const mapStateToProps = (rootState, props) => ({
	...props,
	posts: rootState.postList.posts
});

const actions = {
	setSelectedPostId
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);
