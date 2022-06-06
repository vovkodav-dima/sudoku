import {DifficultLevelEnum} from './enums';

export const CORRECT_CELL_VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const BOARD_SIZE = 9;
export const BOX_SIZE = 3;

export const labelByDifficultLevelEnum: {[key in DifficultLevelEnum]: string} = {
    [DifficultLevelEnum.EASY]: 'Easy, 3-5 prefilled numbers',
    [DifficultLevelEnum.MEDIUM]: 'Medium, 3-4 prefilled numbers',
    [DifficultLevelEnum.HARD]: 'Hard — 1-3 prefilled numbers',
};
