import React from 'react';

const NumberInputField = (props) => {
	/**
     * Validate a key down event for the range of criteria
     * @param  {event} e a key down event
     * @return {boolean} validation state
     */
	const applyKeyDown = (e) => {
		var value = true;

		/**
			 * arrows up & down are allways denied
			 * to prevent choosing right answer from keyboard 
			 */
		if (e.which === 38 || e.which === 40) {
			return true;
		}

		/** delete, backspace and tab are always allowed 
			 */
		if (
			e.which === 8 || //backspace
			e.which === 46 || //delete
			e.which === 9
		) {
			//tab
			return false;
		}

		/** more than 2 digits in a 2-digits fields,
			 * more than 3 digits in a 3-digits field
			 * instant return to prevent overflowing
			 */
		if (e.target.value.length > e.target.max.length - 1) {
			// (e.target.max < 100 && e.target.value.length > 1) || //length > 2
			// (e.target.max >= 100 && e.target.value.length > 2)
		// ) {
			//in "100" length > 3
			// || (e.target.max === 100 && e.target.value.length > 2)) //in "100" length > 3
			// console.log(e.target.value, e.which, e.target.max, e.target.value.length);
			return true;
		}

		/** https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad/13196983
			 * The problem with keyCode is to avoid the combined keys
			 * with the numbers on top of keyboard, we must add a check
			 *  on the key "Shift" and "Alt" to avoid special characters
			 * such as e @ & " { } ...
			 */
		let key = Number(e.key);
		if (isNaN(key) || e.key === null || e.key === ' ') {
			// console.log("is not numeric");
			value = true;
		} else {
			// console.log("is numeric");
			value = false;
		}

		return value;
	};

	/**
	 * Handles key-down event, runs key validation, 
	 * decline input of the key if invalid
	 * @return {void}
	 */
	const handleKeyDown = (e) => {
		if (applyKeyDown(e)) {
			e.preventDefault();
		}
	};

	return (
		<input
			type="number"
			pattern="[0-9]*"
			inputMode="numeric"
			className={props.className}
			placeholder=" "
			min={parseInt(props.number)}
			max={parseInt(props.number)}
			step="1"
			onKeyDown={(event) => handleKeyDown(event)}
			title=""
		/>
	);
};

export default NumberInputField;
