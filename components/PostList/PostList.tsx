import React from 'react';
import Link from 'next/link'
import { IPost } from './IPost';


interface IPostListProps {
    posts:Array<IPost>
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