import { NextPage} from 'next';
import { IPost } from '../../components/PostList/IPost';
import { FETCH_POST_BY_ID } from '../../components/PostList/redux/actionTypes'
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

interface IPostPageProps {
    selectedPost?: IPost;
}
const PostPage: NextPage<IPostPageProps> = ({ selectedPost }) => {
    return selectedPost?<div>
        {selectedPost.title}
    </div>:<Spinner/>
}

PostPage.getInitialProps = async ( ctx ) => {
    console.log(ctx.query)
    await ctx.store.dispatch({ type: FETCH_POST_BY_ID, payload: ctx.query.id})
    return {}
};

const mapStateToProps = (rootState, props) => ({
    ...props,
    selectedPost: rootState.postList.selectedPost
});

export default connect(mapStateToProps)(PostPage);