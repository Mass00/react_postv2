import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
type defaultButtonPropsTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type customButtonPropsTypes = defaultButtonPropsTypes & {

}
export const CustonButton:React.FC<customButtonPropsTypes> = (
    {
        children,className,

        ...rest
    }
) => {
    const finalClassName = className ? className : ''
    return <button className={finalClassName} {...rest}>
        {children ? children : 'Кнопка'}
            </button>
};
