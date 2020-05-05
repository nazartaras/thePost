import styled from 'styled-components';
import Link from 'next/link';
import { TPost } from '../../types/TPost';

interface IPostItemProps {
    post: TPost;
}

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
`;

const PostItemTitle = styled.h3`
text-align:center;
`;
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
`;

const PostItemHeader = styled.div`
height:30px;
padding: 5px;
border-bottom: 1px solid #8c8c8c;
display: flex;
align-items:center;
`;

const UserAvatar = styled.img`
height: 30px;
width: 30px;
boder-radius: 50%;
margin-right: 10px;
`;

const UserName = styled.span`
`;

const PostItem: React.FunctionComponent<IPostItemProps> = ({post}) => {
    return (
        <Link key={post.id as React.ReactText} href="/posts/[id]" as={`/posts/${post.id}`}>
            <StyledPostItem>
                <PostItemHeader>
                    <UserAvatar alt='creator-image' src='/user.png' />
                    <UserName>Bill Morigan</UserName>
                </PostItemHeader>
                <PostItemTitle>{post.title}</PostItemTitle>
                <PostItemBody>{post.body}</PostItemBody>
            </StyledPostItem>
        </Link>
    );
};

export default PostItem;
