import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.module.css';
import classNames from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button {...props} className={
            classNames(
                className,
                styles.button,
                {
                    [styles.primary]: appearance == 'primary',
                    [styles.ghost]: appearance == 'ghost'
                }
            )}>
            {children}
            {arrow !== 'none' &&
                <span className={
                    classNames(
                        styles.arrow,
                        {
                            [styles.down]: arrow === 'down',
                            [styles.right]: arrow === 'right'
                        }
                    )}>
                    <ArrowIcon />
                </span>}
        </button>
    );
}