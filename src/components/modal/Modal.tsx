import React, { useCallback } from 'react';
import {IModal} from './modal.types';
import {ReactComponent as CloseIcon } from '../../assets/close.svg';
import './modal.scss'

const Modal  = (props: React.PropsWithChildren<IModal>) => {
    const {
        title,
        onClose,
        children
    } = props;

    const handleClose = useCallback(() => {
        if(onClose) onClose();
    }, [onClose]);

    return(
        <div className='modalWrapper'>
            <div className='modalContent'>
                <span className='modalClose' onClick={handleClose}><CloseIcon/></span>
                <header className='modalHeader'>
                    {title}
                </header>
                {children}
            </div>
        </div>
    );
};

export default Modal;
