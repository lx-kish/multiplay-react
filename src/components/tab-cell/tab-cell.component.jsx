import React from 'react';

import IconCircle from '../icons-svg/icon-circle.component';

const TabCell = props => {

    // const renderScoreRow = () => {

    //     var dots = [];
    //     for (var i = 1; i <= props.number; i++) {
    //         dots.push(<IconCircle key={i} className={`component__icon _${i}`} />);
    //     }
    //     return <div className='component__score-row'>{dots}</div>
    // }

    return (
        <div className='component'>
            <div className='component__input-box'>
                <input
                    type='number'
                    pattern='[0-9]*'
                    inputmode='numeric'
                    className='component__input'
                    placeholder=' '
                    min={props.value}
                    max={props.value}
                    step='1'
                ></input>
            </div>
            <div className='component__score'>
                {[...Array(props.number)].map((x, i) =>
                    <IconCircle key={i} className={`component__icon _${i}`} />
                )}
            </div>
        </div>
    )
};

export default TabCell; 