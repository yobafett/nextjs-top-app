import React from 'react'
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import classNames from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    const currentYear = new Date().getFullYear();

    return (
        <footer {...props} className={classNames(className, styles.footer)} >
            <div>OwlTop © 2020 - {currentYear} Все права защищены</div>
            <a href='/' target='_blank'>Пользовательское соглашение</a>
            <a href='/' target='_blank'>Политика конфиденциальности</a>
        </footer>
    )
}