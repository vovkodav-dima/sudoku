import React, {FC} from 'react';
import {ReactComponent as LogoIcon} from '../../assets/logo.svg';

const Logo: FC = () => {
    return (
        <a href='/' className='logo'>
            <LogoIcon className='logo'/>
        </a>
    )
};

export default Logo;