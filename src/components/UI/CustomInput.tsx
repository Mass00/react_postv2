import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
type defaultInputPropsTypes = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type customInputPropsTypes = defaultInputPropsTypes & {

}
export const CustomInput:React.FC<customInputPropsTypes> = (
    {
        className, type,
        onChange,

        ...rest
    }
) => {
    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(e)
    const finalClassName = className ? className : ''
    return <input
        type={type}
        className={finalClassName}
        onChange={handlerOnChange}
        {...rest}
    />
};