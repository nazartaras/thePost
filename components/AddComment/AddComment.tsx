import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface IAddCommentProps {
    share: (postId: string, body: string) => { type: string, payload: { postId: string, body: string } };
    postId: string;
}

const StyledAddCommentInput = styled.input`
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.inputColor};
    padding 15px;
    outline: none;
    transition: all .2s ease-in-out;
    font-size: 18px;

    &:focus{
        border-bottom: 4px solid ${(props) => props.theme.inputFocusedColor};
    }
`;
const StyledAddCommentBlock = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    align-items:center;
    grid-gap: 10px;
    margin-bottom: 10px;
`;

const StyledAddCommentButton = styled.button`
    width:100%;
    max-width: 100px;
    padding: 10px;
    width: 100px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.buttonColor};
    color: white;
    font-size: 18px;
    align-self: center;
    border: none;
    box-shadow: 0 0 5px #7681B3;
    transition: all .2s ease-in-out;
    justify-self: center;

    &:hover{
        cursor: pointer;
        background-color: ${(props) => props.theme.buttonHoverColor};
    }
`;

const AddComment: React.FunctionComponent<IAddCommentProps> = ({ share, postId }) => {
    const [comment, changeComment] = useState('');

    const shareComment = (): void => {
        if (comment.trim() !== '') {
            share(postId, comment);
            changeComment('');
        }
    };

    const handleCommentChange = ({ target }): void => {
        changeComment(target.value);
    };

    return (
        <StyledAddCommentBlock>
            <StyledAddCommentInput value={comment} onChange={handleCommentChange} placeholder="Add comment" />
            <StyledAddCommentButton onClick={shareComment}><FontAwesomeIcon icon={faEnvelope} /></StyledAddCommentButton>
        </StyledAddCommentBlock>
    );
};

export default AddComment;
