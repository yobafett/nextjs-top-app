
import React from 'react'
import { TagProps } from './Tag.props'
import styles from './Tag.module.css';
import classNames from 'classnames';

export const Tag = ({ size, color, href, children, className, ...props }: TagProps): JSX.Element => {
    return (
        <div {...props}
            className={
                classNames(
                    className,
                    styles.tag,
                    {
                        [styles.s]: size == 's',
                        [styles.m]: size == 'm',
                        [styles.ghost]: color == 'ghost',
                        [styles.red]: color == 'red',
                        [styles.gray]: color == 'gray',
                        [styles.green]: color == 'green',
                        [styles.primary]: color == 'primary',
                    }
                )}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    )
}
