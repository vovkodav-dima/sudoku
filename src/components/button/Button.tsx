import React, { FC } from 'react';
import {IButtonProps} from './button.types';
import clsx from 'clsx';
import './button.scss';


export const Button:FC<IButtonProps> = (props) => {

    const {
        title,
        onClick,
        variant = 'primary'
    } = props;
    return(
        <button
            className={clsx('button', variant)}
            onClick={onClick}
        >
            { title }
        </button>
    );
};

export default Button;