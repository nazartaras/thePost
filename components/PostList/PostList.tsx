import React from 'react';
import Link from 'next/link';
import { TPost } from '../../types/TPost';

interface IPostListProps {
    posts: TPost[];
}

const PostList: React.FunctionComponent<IPostListProps> = ({ posts }) => {
    const generatePosts = posts.map((el) => (
        <Link key={el.id as React.ReactText} href="/posts/[id]" as={`/posts/${el.id}`}>
            {el.title}
        </Link>
    ),
    );
    return (
        <div>
            {generatePosts}
        </div>
    );
};

export default PostList;
