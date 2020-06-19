import React from 'react';

import content from '../../table.content';

import IconCircle from '../icons-svg/icon-circle.component';

const TabCell = props => {

    const getRoundedHalfANumber = (number) => {
        return Math.round(number / 2);
    }

    const getTopLineDotsAmount = () => {
        return props.line > 2 ? getRoundedHalfANumber(props.line) : props.line;
    }

    return (
        <div className='component'>
            <div className='component__input-box'>
                <input
                    type='number'
                    pattern='[0-9]*'
                    inputMode='numeric'
                    className='component__input'
                    placeholder=' '
                    min={props.value}
                    max={props.value}
                    step='1'
                />
            </div>
            <div className='component__score'>
                <div className="component__score-row">
                    {[...Array(getTopLineDotsAmount())].map((x, i) =>
                        <IconCircle
                            key={i}
                            className={`component__icon ${content.styles[i + 1]}`}
                        />
                    )}
                </div>
                <div className="component__score-row">
                    {[...Array(props.line - getTopLineDotsAmount())].map((x, i) =>
                        <IconCircle
                            key={i + getRoundedHalfANumber(props.line)}
                            className={`component__icon ${content.styles[i + 1 + getRoundedHalfANumber(props.line)]}`}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default TabCell; 