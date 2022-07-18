import React, {useMemo, useState} from 'react';
import {CreatePost} from "./CreatePost/CreatePost";
import st from './Post.module.css'
import {PostsList} from "./PostList/PostsList";
import {PostFilter} from "./PostFilter/PostFilter";
import {CustonButton} from "../UI/CustonButton";

export type postsTypes = {
    id: string
    text: string
    isDone: boolean
}
type PostsPropsTypes = {
    postFormId: string
    title: string
    posts: postsTypes[]
    addPost: (postFormId: string, text: string) => void
    changeStatus: (postFormId: string, postId: string, status: boolean) => void
    removePost: (postFormId: string, postId: string) => void
    removePostForm: (postFormId: string) => void
}
export const Posts: React.FC<PostsPropsTypes> = (
    {
        postFormId, posts,
        title,
        changeStatus, removePost,
        addPost, removePostForm
    }
) => {
    const [searchQ, setSearchQ] = useState<string>('')
    const onChangeSetSearchQ = (searchQ: string) => {
        setSearchQ(searchQ)
    }
    const handlerOnClickRemovePostForm = () => {
        removePostForm(postFormId)
    }
    const filtredPosts = useMemo(() => {
        return posts.filter(i => i.text.toLowerCase().includes(searchQ))
    }, [searchQ, posts])

    return (
        <div className={st.container}>
            <div className={st.title}>
                <h4>{title}</h4>
                <CustonButton onClick={handlerOnClickRemovePostForm}>X</CustonButton>
            </div>
            <CreatePost
                postFormId={postFormId}
                handlerOnClickAddPost={addPost}
            />
            <PostFilter
                postFormId={postFormId}
                searchQ={searchQ}
                handlerOnChangeSetSearchQ={onChangeSetSearchQ}/>
            <PostsList
                posts={filtredPosts}
                postFormId={postFormId}
                handlerOnChageChangeStatus={changeStatus}
                handlerOnClickRemovePost={removePost}
            />
        </div>
    );
};
