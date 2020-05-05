import React from 'react';
import styled from 'styled-components';
import { TComment } from '../../types/TComment';


interface ICommentListProps {
    comments: Array<TComment>
}

const StyledCommentList = styled.ul`
    list-style-type: none;
`

const CommentItem = styled.li`
    position: relative;
    background: #A3D5FF;
    border-radius: 10px;
    height: 20px;
    margin-bottom: 10px;
    padding 20px;
    color: white;
    font-size: 18px;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-right-color: #A3D5FF;
        border-left: 0;
        border-bottom: 0;
        margin-top: 0px;
        margin-left: -20px;
    }
`

const CommentList : React.FunctionComponent<ICommentListProps> = ({comments}) => {
    return <StyledCommentList>
        {
            comments.map(el=><CommentItem key = {el.id as React.ReactText}>{el.body}</CommentItem>)
        }
    </StyledCommentList>
}

export default CommentList;