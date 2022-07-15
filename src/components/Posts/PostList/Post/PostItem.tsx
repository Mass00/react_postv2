import React from 'react';
import st from './PostItem.module.css'
import {CustomInput} from "../../../UI/CustomInput";
import {CustonButton} from "../../../UI/CustonButton";

type PostItemPropsTypes = {
    postId: string
    text: string
    isDone: boolean
    postFormId: string
    handlerOnChageChangeStatus: (postFormId: string, postId: string, status: boolean) => void
    handlerOnClickRemovePost: (postFormId: string, postId: string) => void

}
export const PostItem: React.FC<PostItemPropsTypes> = (
    {
        postId, text,
        isDone, postFormId,
        handlerOnChageChangeStatus, handlerOnClickRemovePost: handlerOnClickRemovePost
    }
) => {
    const onChangeChangeStatus = (e:React.ChangeEvent<HTMLInputElement>) =>
        handlerOnChageChangeStatus(postFormId, postId, e.currentTarget.checked)
    const onClickRemovePost = () => handlerOnClickRemovePost(postFormId, postId)
    return (
        <div className={st.container}>
            <span>{text}</span>
            <div>
                <CustomInput
                    type={"checkbox"}
                    checked={isDone}
                    onChange={onChangeChangeStatus}
                />
                <CustonButton
                    className={st.delBtn}
                    onClick={onClickRemovePost}
                >Delete</CustonButton>
            </div>
        </div>
    );
};
