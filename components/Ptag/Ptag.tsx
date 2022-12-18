
import React from 'react'
import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css';
import classNames from 'classnames';

export const Ptag = ({ size, children, className, ...props }: PtagProps): JSX.Element => {
    return (
        <p {...props} className={
            classNames(
                className,
                styles.p,
                {
                    [styles.s]: size == 's',
                    [styles.m]: size == 'm',
                    [styles.l]: size == 'l'
                }
            )}>{children}</p>
    )
}
