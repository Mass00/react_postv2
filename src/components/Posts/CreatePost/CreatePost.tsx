import React, {useState} from 'react';
import st from './CreatePost.module.css'
import {CustomInput} from "../../UI/CustomInput";
import {CustonButton} from "../../UI/CustonButton";
type CreatePostPropsTypes = {
    postFormId: string
    handlerOnClickAddPost: (postFormId: string, text: string) => void
}
export const CreatePost:React.FC<CreatePostPropsTypes> = (
    {
        postFormId, handlerOnClickAddPost
    }
) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const handlerOnChangeSetInputValue = (e:React.ChangeEvent<HTMLInputElement>) =>
        e.currentTarget.value ? setInputValue(e.currentTarget.value) : setInputValue('')
    const AddPost = () => {
        if(inputValue.trim()){
            handlerOnClickAddPost(postFormId, inputValue)
            setInputValue('')
            setError('')
        } else {
            setError('Title is required')
        }
    }
    return (
        <>
        <div className={st.container}>
            <CustomInput
                value={inputValue}
                onChange={handlerOnChangeSetInputValue}
                className={st.input}
            />
            <CustonButton
                className={st.addBtn}
                onClick={AddPost}
            >Add Post
            </CustonButton>

        </div>
            {error ? <span style={{color: 'red'}}>{error}</span> : <></>}
        </>
    );
};
