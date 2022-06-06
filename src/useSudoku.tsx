import {DifficultLevelEnum} from './enums';
import React, {useCallback, useMemo} from 'react';
import Cell from './components/grid/components/cell';
import {BOX_SIZE, BOARD_SIZE, CORRECT_CELL_VALUE} from './consts';

const useSudoku = (
    difficult: DifficultLevelEnum,
    size = BOARD_SIZE,
    boxSize = BOX_SIZE,
): any => {
    const input = Array(size).fill([]).map(row => Array(size).fill(0));

    const findEmptyCell = useCallback((board: number[][]): Array<number> | null => {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if(!board[r][c]) {
                    return [r, c]
                }
            }
        }
        return null;
    }, [size]);

    const validateBoard = useCallback((value: number, position: Array<number>, board: number[][]) => {
        const [r, c] = position;

        for (let i = 0; i < size; i++) {
           if(board[i][c] === value && i !== r) return false
        }

        for (let i = 0; i < size; i++) {
            if(board[r][i] === value && i !== c) return false
        }

        const boxRow = Math.floor( r / boxSize) * boxSize;
        const boxCol = Math.floor( c / boxSize) * boxSize;

        for (let i = boxRow; i < boxRow + boxSize; i++) {
            for (let j = boxCol; j < boxCol + boxSize; j++) {
                if(board[i][j] === value && i !== r && j !== c) return false;
            }
        }

        return true;
    }, [boxSize, size]);

    const generateRandomValue = useCallback((min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + min)) + min
    }, []);

    const solver = useCallback((board: number[][]): number[][] => {
        const solve = (): boolean => {
            const currentPosition = findEmptyCell(board);

           if(currentPosition === null) {
               return true;
           }

            for (let i = 1; i < size + 1; i++) {
                const current =  generateRandomValue(Math.min(...CORRECT_CELL_VALUE), Math.max(...CORRECT_CELL_VALUE));
                const isValidBoard = validateBoard(current, currentPosition, board);
                if(isValidBoard) {
                    const [x, y] = currentPosition;
                    board[x][y] = current;

                    if(solve()) {
                        return true;
                    }

                    board[x][y] = 0;
                }
            }

            return false;
        };

        solve();
        return board;
    }, [findEmptyCell, validateBoard, generateRandomValue, size]);

    const generateBlock = useCallback((board: number[][]): number[][] => {
        let res: number[][] = [];
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                let curr = [];
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        curr.push(board[i + k][j + l]);
                    }
                }
                res.push(curr);
            }
        }
        return res;
    }, []);

    const createGrid = useMemo(() => {
        return(
            generateBlock(solver(input)).map(block => {
                return (
                    <div className='block'>
                        {
                            block.map(cell => {
                                return(
                                    <Cell
                                        value={cell}
                                        readonly={false}
                                        onChange={() => ''}

                                    />
                                )
                            })
                        }
                    </div>
                )
            })
        )
    }, [solver, generateBlock, input]);

    return {
        gridComponent: createGrid,
        validation: validateBoard

    }
};

export default useSudoku;