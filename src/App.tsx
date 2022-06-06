import React, {FC, useCallback, useState} from 'react';
import Logo from './components/logo/Logo'
import 'normalize.css';
import './app.scss';
import Button from './components/button/Button';
import Modal from './components/modal';
import {DifficultLevelEnum} from './enums';
import RadioControl from './components/radioControl';
import {labelByDifficultLevelEnum} from './consts';
import useSudoku from "./useSudoku";

const App: FC = () => {
    const [isOpenModal, setOpenModal] = useState(false);
    const [difficultLevel, setDifficultLevel] = useState<DifficultLevelEnum>(DifficultLevelEnum.EASY);
    const [chosenVariant, setChosenVariant] = useState<DifficultLevelEnum>(difficultLevel);
    const {
        gridComponent,
    } = useSudoku(difficultLevel);

    const clickHandler = useCallback(() => {
        setOpenModal((prevState => !prevState));
    }, []);

    const onChangeDifficult = useCallback((value: DifficultLevelEnum) => {
        setChosenVariant(value)
    }, []);

    const onSaveDifficultConfig = useCallback(() => {
        setOpenModal(false);
        setDifficultLevel(chosenVariant)
    }, [chosenVariant]);

    return (
        <>
            <section className='container'>
                <Logo/>
                <div className='grid'>
                    { gridComponent }
                    <div className='flex buttonWrapper'>
                        <Button
                            title={'Create new puzzle'}
                            variant={'primary'}
                            onClick={clickHandler}
                        />
                    </div>
                </div>
            </section>
            {isOpenModal &&
						<Modal
							title={'Choose difficulty'}
							onClose={clickHandler}
						>
								<div>
										<RadioControl<DifficultLevelEnum>
											label={labelByDifficultLevelEnum[DifficultLevelEnum.EASY]}
											value={DifficultLevelEnum.EASY}
											name='difficultVariant'
											checked={chosenVariant === DifficultLevelEnum.EASY}
											onChoose={onChangeDifficult}
										/>
										<RadioControl<DifficultLevelEnum>
											label={labelByDifficultLevelEnum[DifficultLevelEnum.MEDIUM]}
											value={DifficultLevelEnum.MEDIUM}
											name='difficultVariant'
											onChoose={onChangeDifficult}
											checked={chosenVariant === DifficultLevelEnum.MEDIUM}
										/>
										<RadioControl<DifficultLevelEnum>
											label={labelByDifficultLevelEnum[DifficultLevelEnum.HARD]}
											value={DifficultLevelEnum.HARD}
											name='difficultVariant'
											onChoose={onChangeDifficult}
											checked={chosenVariant === DifficultLevelEnum.HARD}
										/>

								</div>
								<Button
									title='Create'
									onClick={onSaveDifficultConfig}
								/>
						</Modal>
            }
        </>
    );
};

export default App;
