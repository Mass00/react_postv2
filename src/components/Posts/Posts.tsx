import React, {useState} from 'react';
import {CreatePost} from "./CreatePost/CreatePost";
import st from './Post.module.css'
import {PostsList} from "./PostList/PostsList";
import {PostFilter} from "./PostFilter/PostFilter";
export type postsTypes = {
    id: string
    text: string
    isDone: boolean
}
type PostsPropsTypes = {
    postFormId: string
    title: string
    posts: postsTypes[]
    searchQ: string
    handlerOnClickAddPost: (postFormId: string, text: string) => void
    handlerOnChageChangeStatus: (postFormId: string, postId: string, status: boolean) => void
    handlerOnClickRemovePost: (postFormId: string, postId: string) => void
    handlerOnChangeSetSearchQ: (postFormId: string, searchQ: string) => void
}
export const Posts:React.FC<PostsPropsTypes> = (
    {
        postFormId, posts,
        title, searchQ,
        handlerOnChageChangeStatus, handlerOnClickRemovePost,
        handlerOnChangeSetSearchQ, handlerOnClickAddPost
    }
) => {
    // const [searchQ, setSearchQ] = useState<string>('')
    return (
        <div className={st.container}>
            <h4>{title}</h4>
            <CreatePost
                postFormId={postFormId}
                handlerOnClickAddPost={handlerOnClickAddPost}
            />
            <PostFilter
                postFormId={postFormId}
                searchQ={searchQ}
                handlerOnChangeSetSearchQ={handlerOnChangeSetSearchQ}/>
            <PostsList
                posts={posts}
                postFormId={postFormId}
                handlerOnChageChangeStatus={handlerOnChageChangeStatus}
                handlerOnClickRemovePost={handlerOnClickRemovePost}
            />
        </div>
    );
};
