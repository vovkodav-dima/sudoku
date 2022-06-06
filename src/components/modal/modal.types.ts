import {ReactNode} from 'react';

export interface IModal {
    title: string | ReactNode
    onClose?: () => void;
}