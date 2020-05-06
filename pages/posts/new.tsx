import React, { useState } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createPost } from '../../components/PostItem/redux/actions';
import Header from '../../components/Header/Header';

interface IPostConstructorProps {
    createPost: (title: string, body: string) => { type: string, payload: { title: string, body: string } };
}

const StyledPostContructor = styled.div`
    margin: 0 25%;
    @media(max-width:900px){
        margin 0 5px;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const TitleInput = styled.input`
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.inputColor};;
    margin-bottom: 10px;
    margin-top:50px;
    padding 15px;
    outline: none;
    transition: all .2s ease-in-out;
    font-size: 20px;

    &:focus{
        border-bottom: 4px solid ${(props) => props.theme.inputFocusedColor};;
    }
`;

const BodyTextarea = styled.textarea`
    border: 2px solid ${(props) => props.theme.inputColor};;
    outline: none;
    min-height: 150px;
    font-size: 16px;
    resize:vertical;
    padding: 10px;
    margin-bottom: 20px;

    &:focus{
        border: 4px solid ${(props) => props.theme.inputFocusedColor};;
    }
`;

const CreateButton = styled.button`
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.buttonColor};;
    color: white;
    font-size: 18px;
    align-self: center;
    border: none;
    box-shadow: 0 0 5px #7681B3;
    transition: all .2s ease-in-out;

    &:hover{
        cursor: pointer;
        background-color: ${(props) => props.theme.buttonHoverColor};;
    }
`;

const ErrorMessage = styled.p`
    text-align: center;
    font-size: 24px;
    color: red;
`;

const PostConstructor: NextPage<IPostConstructorProps> = ({ createPost }) => {
    const [postTitle, changePostTitle] = useState('');
    const [postBody, changePostBody] = useState('');
    const [error, setError] = useState('');

    const handleTitleChange = ({ target }): void => {
        setError('');
        changePostTitle(target.value);
    };

    const handleBodyChange = ({ target }): void => {
        setError('');
        changePostBody(target.value);
    };
    const validateForm = (title, body): boolean => {
        if (title.trim() === '' || body.trim() === '') {
            setError('All fields should be filled!!!');
            return false;
        }
        return true;
    };

    const handleSubmit = (e): void => {
        if (validateForm(postTitle, postBody)) {
            createPost(postTitle.trim(), postBody.trim());
            Router.push('/');
        }
    };
    return (
        <>
            <Header />
            <StyledPostContructor>
                <StyledForm onSubmit={(e) => e.preventDefault()}>
                    {error ? <ErrorMessage>🛑{error}🛑</ErrorMessage> : null}
                    <TitleInput placeholder='Enter title' value={postTitle} onChange={handleTitleChange} type='text' />
                    <BodyTextarea placeholder='Enter body' value={postBody} onChange={handleBodyChange} />
                    <CreateButton type='submit' onClick={handleSubmit}>Create</CreateButton>
                </StyledForm>
            </StyledPostContructor>
        </>
    );
};

const mapStateToProps = (rootState, props) => ({
    ...props,
});

const actions = {
    createPost,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostConstructor);
