import React, {FC, useCallback} from 'react';
import clsx from "clsx";
import './cell.scss';
import { ICell } from './cell.types';

const Cell:FC<ICell> = (props) => {
    const {
        value,
        error,
        readonly,
        onChange
    } = props;

    const onChangeHandler = useCallback((event: any) => {
        onChange(event.target.value)
    }, [onChange]);

    return (
        <input
            className={clsx('cell', error && 'cell_error')}
            value={value ? value : undefined}
            type='text'
            max={1}
            min={9}
            maxLength={1}
            onChange={onChangeHandler}
            readOnly={readonly}
        />
    );
};

export default Cell;
