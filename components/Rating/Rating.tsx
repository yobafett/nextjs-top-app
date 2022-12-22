
import React, { KeyboardEvent, useEffect, useState } from 'react'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css';
import classNames from 'classnames';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number): void => {
        if (isEditable) {
            constructRating(i);
        }
    };

    const updateRating = (i: number): void => {
        if (isEditable && setRating) {
            setRating(i);
        }
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
        if (e.code == 'Space') {
            updateRating(i);
        }
    }

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={
                        classNames(
                            styles.star,
                            {
                                [styles.filled]: i < currentRating,
                                [styles.editable]: isEditable
                            }
                        )}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => updateRating(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(i + 1, e)}
                    />
                </span>
            )
        })

        setRatingArray(updatedArray);
    }

    return (
        <div {...props}>
            {ratingArray.map((r: JSX.Element, i: Number) => (<span key={i.toString()}>{r}</span>))}
        </div>
    )
}
