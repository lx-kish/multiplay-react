import React from 'react';

import IconHeart from '../icons-svg/icon-heart.component';
import IconLxKish from '../icons-svg/icon-lx-kish.component';

const Footer = props => {

    return (
        <footer className='footer'>
            <p className='footer__credentials'>
                Built with
                <span className='footer__icon-box'>
                    <IconHeart className='footer__icon three' />
                </span>
                by
                <span className='footer__icon-box'>
                    <IconLxKish className='footer__icon three' />
                </span>
                Alexander Kish
            </p>
        </footer>
    )
};

export default Footer;