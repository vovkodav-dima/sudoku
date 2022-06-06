import {ReactNode} from 'react';

export type ButtonVariantType = 'primary' | 'secondary'

export interface IButtonProps {
    title: string | ReactNode
    variant?: ButtonVariantType
    onClick: () => void;
}