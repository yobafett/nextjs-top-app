
import React, { useEffect, useState } from 'react'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css';
import classNames from 'classnames';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: Number) => {
            return <StarIcon className={
                classNames(
                    styles.star,
                    { [styles.filled]: i < currentRating }
                )
            } />
        })

        setRatingArray(updatedArray);
    }

    return (
        <div {...props}>
            {ratingArray.map((r: JSX.Element, i: Number) => (<span key={i.toString()}>{r}</span>))}
        </div>
    )
}
