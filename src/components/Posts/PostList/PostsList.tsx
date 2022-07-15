import React from 'react';
import st from './PostsList.module.css'
import {postsTypes} from "../Posts";
import {PostItem} from "./Post/PostItem";
type PostListPropsTypes = {
    posts: postsTypes[]
    postFormId: string
    handlerOnChageChangeStatus: (postFormId: string, postId: string, status: boolean) => void
    handlerOnClickRemovePost: (postFormId: string, postId: string) => void
}

export const PostsList:React.FC<PostListPropsTypes> = (
    {
        posts, postFormId,
        handlerOnChageChangeStatus, handlerOnClickRemovePost
    }
) => {

    return (
        <div className={st.container}>
                <ul>
                    {posts.map(i => <PostItem
                        key={i.id}
                        postId={i.id}
                        text={i.text}
                        isDone={i.isDone}
                        postFormId={postFormId}
                        handlerOnChageChangeStatus={handlerOnChageChangeStatus}
                        handlerOnClickRemovePost={handlerOnClickRemovePost}
                    />)}
                </ul>
        </div>
    );
};
