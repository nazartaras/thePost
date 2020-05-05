import React, { useState } from 'react'
import { NextPage } from 'next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createPost } from '../../components/PostList/redux/actions'

interface IPostConstructorProps {
    createPost: (title: String, body: String) => { type: String, payload: { title: String, body: String } }
}

const PostConstructor: NextPage<IPostConstructorProps> = ({ createPost }) => {
    const [postTitle, changePostTitle] = useState('');
    const [postBody, changePostBody] = useState('');
    const [error, setError] = useState('');

    const handleTitleChange = ({ target }) => {
        setError('');
        changePostTitle(target.value);
    }

    const handleBodyChange = ({ target }) => {
        setError('');
        changePostBody(target.value);
    }
    const validateForm = (title, body) => {
        if (title.trim() === '' || body.trim() === '') {
            setError('All fields should be filled!!!')
            return false;
        }
        return true
    }

    const handleSubmit = (e) => {
        if (validateForm(postTitle, postBody)) {
            createPost(postTitle.trim(), postBody.trim())
        }
    }
    return <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>{error}</div>
            <input value={postTitle} onChange={handleTitleChange} type='text' />
            <textarea value={postBody} onChange={handleBodyChange} />
            <button type='submit' onClick={handleSubmit}>Create</button>
        </form>
    </div>
}

const mapStateToProps = (rootState, props) => ({
    ...props,
    selectedPost: rootState.postList.selectedPost
});

const actions = {
    createPost
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostConstructor);