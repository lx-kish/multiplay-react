import React from 'react';

import content from '../../table.content';

import IconCircle from '../icons-svg/icon-circle.component';

const TabCell = props => {

    const getWholeHalfANumber = aNumber => {
        return Math.round(aNumber / 2);
    }

    const getTopLineDotsAmount = () => {
        return props.line > 2 ? getWholeHalfANumber(props.line) : props.line;
    }

    const getInputClassName = () => {
        return props.value < 100 ?
            'component__input' :
            'component__input component__input--hundreed';
    }

    /**
     * Validate a key down event for the range of criteria
     * @param  {event} e a key down event
     * @return {boolean} validation state
     */
    const applyKeyDown = e => {

        var value = true;

        /* arrows up & down are allways denied
        * to prevent choosing right answer from keyboard 
        */
        if (e.which === 38 || e.which === 40) {
            return true;
        }

        /* delete, backspace and tab are always allowed 
        */
        if (e.which === 8  //backspace
            || e.which === 46 //delete
            || e.which === 9)  //tab
        {
            return false;
        }

        /* more than 2 digits in a 2-digits fields,
        * more than 3 digits in a 3-digits field
        * instant return to prevent overflowing
        */
        if ((e.target.max < 100 && e.target.value.length > 1) //length > 2
            || (e.target.max === 100 && e.target.value.length > 2)) //in "100" length > 3
        {
            return true;
        }

        /* https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad/13196983
        * The problem with keyCode is to avoid the combined keys
        * with the numbers on top of keyboard, we must add a check
        *  on the key "Shift" and "Alt" to avoid special characters
        * such as e @ & " { } ...
        */
        let key = Number(e.key)
        if (isNaN(key) || e.key === null || e.key === ' ') {
            // console.log("is not numeric");
            value = true;
        }
        else {
            // console.log("is numeric");
            value = false;
        }

        return value;

    }

    const handleKeyDown = (e) => {

        if (applyKeyDown(e)) {
            // console.log(applyKeyDown(e));
            e.preventDefault();
        }

    }

    return (
        <div className='component'>
            <div className='component__input-box'>
                <input
                    type='number'
                    pattern='[0-9]*'
                    inputMode='numeric'
                    className={getInputClassName()}
                    placeholder=' '
                    min={props.value}
                    max={props.value}
                    step='1'
                    onKeyDown={
                        (event) => handleKeyDown(event)
                    }
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
                            key={i + getWholeHalfANumber(props.line)}
                            className={`component__icon ${content.styles[i + 1 + getWholeHalfANumber(props.line)]}`}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default TabCell; 