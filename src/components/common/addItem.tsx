import React, {ReactNode, useState} from 'react';
import st from "../Posts/CreatePost/CreatePost.module.css";
import {CustonButton} from "../UI/CustonButton";
import {CustomInput} from "../UI/CustomInput";

type addItemPropsTypes = {
    children?: ReactNode
    errorTitle?: string
    addItem: (text: string) => void
}
export const AddItem: React.FC<addItemPropsTypes> = (
    {
        addItem, children,errorTitle
    }
) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const handlerOnChangeSetInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        e.currentTarget.value ? setInputValue(e.currentTarget.value) : setInputValue('')
    const handlerOnClickAddItem = () => {
        if(inputValue.trim()){
            addItem(inputValue)
            setInputValue('')
            setError('')
        } else {
            setError(errorTitle ?  errorTitle :'Title is required')
        }
    }
    return (
        <div>
            <div>
                <CustomInput
                    value={inputValue}
                    onChange={handlerOnChangeSetInputValue}
                    className={st.input}
                />
                <CustonButton
                    className={st.addBtn}
                    onClick={handlerOnClickAddItem}
                >{children}
                </CustonButton>
            </div>
            {error ? <span style={{color: 'red'}}>{error}</span> : <></>}
        </div>
    );
};
