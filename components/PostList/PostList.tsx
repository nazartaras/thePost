import React from 'react';
import Link from 'next/link'
import { TPost } from '../../types/TPost';


interface IPostListProps {
    posts:Array<TPost>
}

const PostList: React.FunctionComponent<IPostListProps> = ({posts}) => (
    <div>
        {
            posts.map(el => <Link key = {el.id as React.ReactText} href="/posts/[id]" as={`/posts/${el.id}`}>
            {el.title}
          </Link>)
        }
    </div>
)

export default PostList;