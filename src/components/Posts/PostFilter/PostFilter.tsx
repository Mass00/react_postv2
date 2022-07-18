import React, {useState} from 'react';
import {CustomInput} from "../../UI/CustomInput";
import st from './PostFilter.module.css'
type PostFilterPropsTypes = {
    postFormId: string
    searchQ: string
    handlerOnChangeSetSearchQ: (searchQ: string) => void
}
export const PostFilter:React.FC<PostFilterPropsTypes> = (
    {
        searchQ, postFormId,handlerOnChangeSetSearchQ
    }
) => {

    const onChangeSetSearchQ = (e: React.ChangeEvent<HTMLInputElement>)=>
        handlerOnChangeSetSearchQ(e.currentTarget.value)
    return <div className={st.container}>
        <CustomInput
            type={'text'}
            value={searchQ}
            className={st.input}
            placeholder={'Поиск...'}
            onChange={onChangeSetSearchQ}
        />
    </div>
};
