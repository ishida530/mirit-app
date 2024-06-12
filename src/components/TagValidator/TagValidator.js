import React, { useEffect } from 'react';
import { validData } from '../../dummyData';
import styles from './tagValidator.module.scss';
import cn from 'classnames'
import { IoIosInformationCircle } from "react-icons/io";


const Steps = ({ activeStep }) => {
    const stepsArray = new Array(5).fill(null);

    return (

        <ul className={styles.steps}>
            {stepsArray.map((item, index) => (
                <li
                    key={index}
                    className={cn(styles.step, {
                        [styles.error]: index < activeStep && activeStep <= 2,
                        [styles.warning]: index < activeStep && activeStep > 2 && activeStep < 4,
                        [styles.positive]: index < activeStep && activeStep >= 4,
                    })}
                ></li>
            ))}
        </ul>

    )
}

const TagValidator = ({ activeTagsNumber }) => {
    useEffect(() => { }, [activeTagsNumber])

    return (
        <div className={styles.tagValidator}>
            {
                validData.map((option) =>
                (
                    option.numberActiveTags === activeTagsNumber && (
                        <div key={option.title}>
                            <div className={styles.stepsContainer}>
                                <span style={{ color: option.color }} >{option.title}</span>
                                <Steps activeStep={activeTagsNumber} />
                            </div >
                        </div>
                    )
                )

                )
            }
            {
                (activeTagsNumber > 0 && activeTagsNumber < 5) &&
                <div className={styles.info}>
                    <IoIosInformationCircle fontSize={36} />
                    <p>Zbyt mała ilość tagów. Dodaj jeszcze {5 - activeTagsNumber} aby poprawić widoczność artykułu.</p>
                </div>
            }
            {
                (activeTagsNumber === 5) &&
                <div className={styles.info}>
                    <IoIosInformationCircle fontSize={36} />
                    <p>Twój artykuł będzie wyświetlał się jeszcze częściej :D.</p>
                </div>
            }
        </div >
    );
}

export default TagValidator;