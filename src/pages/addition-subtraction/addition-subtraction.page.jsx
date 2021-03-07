import React from 'react';

import useClickOutside from '../../utils/use-click-outside/useClickOutside';

import Header from '../../components/headers/addition-subtraction/header.component';
import Footer from '../../components/footer/footer.component';
import Problems from '../../components/addition-subtraction/problems/problems.component';

import random from '../../components/math/randoms/random-integer-in-a-range';
import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';

const AdditionSubtraction = (props) => {
	const problems = [
		[
			{
				type: 'operand',
				value: 10
			},
			{
				type: 'sign',
				value: '+'
			},
			{
				type: 'operand',
				value: 5
			},
			{
				type: 'sign',
				value: '+'
			},
			{
				type: 'sign',
				value: '('
			},
			{
				type: 'operand',
				value: 5
			},
			{
				type: 'sign',
				value: '*'
			},
			{
				type: 'operand',
				value: 5
			},
			{
				type: 'sign',
				value: ')'
			},
			{
				type: 'sign',
				value: '='
			},
			{
				type: 'input',
				value: 40
			}
		],
		[
			{
				type: 'input',
				value: 10
			},
			{
				type: 'sign',
				value: '+'
			},
			{
				type: 'operand',
				value: 5
			},
			{
				type: 'sign',
				value: '='
			},
			{
				type: 'operand',
				value: 15
			}
		],
		[
			{
				type: 'operand',
				value: 15
			},
			{
				type: 'sign',
				value: '-'
			},
			{
				type: 'operand',
				value: 5
			},
			{
				type: 'sign',
				value: '='
			},
			{
				type: 'input',
				value: 10
			}
		],
		[
			{
				type: 'operand',
				value: 15
			},
			{
				type: 'sign',
				value: '+'
			},
			{
				type: 'operand',
				value: 14
			},
			{
				type: 'sign',
				value: '='
			},
			{
				type: 'input',
				value: 29
			}
		],
		[
			{
				type: 'operand',
				value: 46
			},
			{
				type: 'sign',
				value: '+'
			},
			{
				type: 'operand',
				value: 23
			},
			{
				type: 'sign',
				value: '='
			},
			{
				type: 'input',
				value: 69
			}
		],
		[
			{
				type: 'operand',
				value: 863
			},
			{
				type: 'sign',
				value: '+'
			},
			{
				type: 'operand',
				value: 2549
			},
			{
				type: 'sign',
				value: '='
			},
			{
				type: 'input',
				value: 3412
			}
		]
	];

	/**
     * Single state hook useState for all the state properties
     */
	const [ fullState, setFullState ] = React.useState({
		addition_problems: 5,
		addend_one_from: 2,
		addend_one_to: 2,
		addend_two_from: 2,
		addend_two_to: 2,
		subtraction_problems: 5,
		minuend_from: 2,
		minuend_to: 2,
		subtrahend_from: 2,
		subtrahend_to: 2,
		number_of_problems: 10,
		columns_per_row: 2,
		open: false
	});

	const menuRef = React.useRef();

	const setState = () => {
		setFullState({
			...fullState,
			open: !fullState.open
		});
	};

	const hideSliderMenu = () => {
		setFullState({
			...fullState,
			open: false
		});
	};

	useClickOutside(menuRef, hideSliderMenu);

	// /**
	//  * Returns mathematical sign for addition or subtraction
	//  * @return {html entity} sign code
	//  */
	// const getSign = () => {
	//     return fullState.subtract ? <>&#x2212;</> : <>&#x2b;</>
	// }

	// /**
	//  * Gets and returns offsetTop of the 'header-stick' section
	//  * @return {Number} offsetTop
	//  */
	// const getHeaderOffsetTop = () => {
	//     const header = document.getElementById('header-stick');
	//     return header.offsetTop;
	// };

	// /**
	// * Empty all the table inputs
	// * @return {void}
	// */
	// const emptyInputs = () => {
	//     let inputs = document.getElementsByClassName('component__input');
	//     // console.log(typeof(inputs))
	//     inputs = Array.from(inputs);
	//     inputs.map(input => {
	//         input.value = '';
	//     })
	// };

	// /**
	//  * React hook useEffect for updating sticky state property
	//  * on display property changing
	//  */
	// React.useEffect(() => {

	//     setFullState({
	//         ...fullState,
	//         sticky: getHeaderOffsetTop()
	//     })

	// }, [fullState.display]);

	// /**
	//  * React hook useEffect for stick header on scrolling
	//  */
	// React.useEffect(() => {

	//     const scrollCallBack = window.addEventListener('scroll', () => {
	//         const header = document.getElementById('header-stick');
	//         if (window.pageYOffset >= fullState.sticky) { //sticky) {
	//             header.classList.add('sticky');
	//         } else {
	//             header.classList.remove('sticky');
	//         }
	//     });

	//     return () => {
	//         window.removeEventListener('scroll', scrollCallBack);
	//     };
	// }, [fullState.sticky]);

	// /**
	// * React hook useEffect for updating sticky state property
	// * on resizing
	// */
	// React.useEffect(() => {

	//     const resizeCallBack = window.addEventListener('resize', () => {
	//         setFullState({
	//             ...fullState,
	//             sticky: getHeaderOffsetTop()
	//         })
	//     });

	//     return () => {
	//         window.removeEventListener('resize', resizeCallBack);
	//     };
	// }, [fullState.sticky]);

	// /**
	//  * React hook useEffect for empty input when toggle addition/subtraction
	//  */
	// React.useEffect(() => {

	//     emptyInputs();

	// }, [fullState.subtract]);

	console.log('random numbers from addition-subtraction page ===> ', random(0, 99));

	return (
		<React.Fragment>
			<NavigationBar open={fullState.open} setOpen={setState} hideSliderMenu={hideSliderMenu} menuRef={menuRef} />
			<Header
				display={fullState.display}
				subtract={fullState.subtract}
				setChecked={() =>
					setFullState({
						...fullState,
						display: !fullState.display
					})}
				setSubtract={() =>
					setFullState({
						...fullState,
						subtract: !fullState.subtract
					})}
			/>
			<main className="problem__main">
				<Problems problems={problems} columns={fullState.columns_per_row} />
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default AdditionSubtraction;
