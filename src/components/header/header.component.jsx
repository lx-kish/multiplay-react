import React from 'react';

import IconChevronDown from '../icons-svg/icon-chevron-down.component';

const Header = props => {

    const showCollapsible = () => {
        return props.checked ?
            <div className='collapsible__part'>
                <hr className='header__hr' />
                <p className='header__description'>
                    - Add the amount of dots under the field to the number from the left.<br />
                        - Write an answer at the field above.<br />
                            - Right answer colors <b>white</b>.<br />
                                - Wrong answer colors <span className='three'><b>red</b></span>.<br />
                                    - Move to the next field and repeate.
                </p>
            </div>
            : null
    }

    return (

        <header className='header'>
            <h1 className='header__title'>
                Multiply me
            </h1>
            <h3 className='header__title--small'>learn multiplication by addition</h3>
            <div className='collapsible'>
                <hr className='header__hr' />
                <h3 className='collapsible__title header__title--small'>How to use</h3>

                <input
                    type='checkbox'
                    className='collapsible__btn'
                    id='collapsible-toggle'
                    checked={props.checked}
                    onChange={() => props.setChecked()}
                    // onChange={showCollapsible()}
                    // onChange={this.handleShowInstructionsChange}
                />

                <label htmlFor='collapsible-toggle' className='collapsible__icon-box'>
                    <IconChevronDown className='collapsible__icon' />
                </label>
                {showCollapsible()}
                <hr className='header__hr' />
            </div>
        </header>

    )
};

export default Header;