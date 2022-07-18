import React, {useState} from 'react';
import st from './CreatePost.module.css'
import {CustomInput} from "../../UI/CustomInput";
import {CustonButton} from "../../UI/CustonButton";
import {AddItem} from "../../common/addItem";
type CreatePostPropsTypes = {
    postFormId: string
    handlerOnClickAddPost: (postFormId: string, text: string) => void
}
export const CreatePost:React.FC<CreatePostPropsTypes> = (
    {
        postFormId, handlerOnClickAddPost
    }
) => {
    const addPost = (text: string) => {
        handlerOnClickAddPost(postFormId, text)
    }
    return (
        <div className={st.container}>
            <AddItem addItem={addPost}/>
        </div>
    );
};
