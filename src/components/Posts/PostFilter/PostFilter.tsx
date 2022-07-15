import React, {useState} from 'react';
import {CustomInput} from "../../UI/CustomInput";
import st from './PostFilter.module.css'
type PostFilterPropsTypes = {
    postFormId: string
    searchQ: string
    handlerOnChangeSetSearchQ: (postFormId: string, searchQ: string) => void
}
export const PostFilter:React.FC<PostFilterPropsTypes> = (
    {
        searchQ, postFormId,handlerOnChangeSetSearchQ
    }
) => {
    const onChangeGetSearchQ = (e: React.ChangeEvent<HTMLInputElement>)=>
        handlerOnChangeSetSearchQ(postFormId, e.currentTarget.value)
    return <div className={st.container}>
        <CustomInput
            type={'text'}
            value={searchQ}
            className={st.input}
            placeholder={'Поиск...'}
            onChange={onChangeGetSearchQ}
        />
    </div>
};
