import React, { useCallback } from 'react';
import {IRadioControl} from './radioControl.types';
import './radioControl.scss';

const RadioControl = <Value, >(props: React.PropsWithChildren<IRadioControl<Value>>) => {
    const {
        label,
        name,
        checked,
        value,
        onChoose
    } = props;

    const handlerClick = useCallback((event: any) => {
        onChoose(event.target.value);
    }, [onChoose]);

    return (
       <div className='radioControlRoot'>
           <input
               name={name}
               type='radio'
               id={`radio-${value}`}
               value={String(value)}
               onChange={handlerClick}
               checked={checked}
               className='radioControlInput'
           />
           <label
               htmlFor={`radio-${value}`}
               className='radioControlLabel'
           >
               {label}
           </label>
       </div>
    );
};

export default RadioControl;
