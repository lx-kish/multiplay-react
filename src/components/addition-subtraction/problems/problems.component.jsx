import React from 'react';

import Problem from '../problem/problem.component';

const Problems = (props) => {
	// /**
	//  * Single state hook useState for all the state properties
	//  */
	// const [fullState, setFullState] = React.useState({
	//     sticky: 0,
	//     display: false,
	//     subtract: false,
	// });

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

  // console.log('props.problems from problems component ===> ', props.problems);
	/**
   * The following algorithm explained in details at:
   * https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
   */

	// const colPerRow = props.columns;
	// const colPerRow = 2;

	/**
   * array of @cols elements, where @cols is the number of rows needed
   * @arr <Array> - the given array of rendering elements
   * @cols <Number> - the number of columns in a row
   */
	const rows = (arr, cols) => [ ...Array(Math.ceil(arr.length / cols)) ];

	// chunk the products into the array of rows
	const contentRows = (arr, cols) => rows(arr, cols).map((row, idx) => arr.slice(idx * cols, idx * cols + cols));
	
	const getContent = contentRows(props.problems, props.columns).map((row, i) => (
	// const getContent = contentRows(props.problems.additions, colPerRow).map((row, i) => (
		<div key={i} className="problem__row">
			{row.map((problem, j) => <Problem key={j} content={problem} x={problem.x} y={problem.y} sign={`+`} />)}
		</div>
	));

	// const getContent = () => {
	// 	// return fullState.subtract ? <>&#x2212;</> : <>&#x2b;</>

	// 	// console.log('props.data from problem.component ===> ', props.data)

	// 	return contentRows(props.problems.additions, colPerRow).map((problem, i) => {
	//     // console.log(problem);
	// 	// return props.problems.additions.map((problem, i) => {
	// 		return <Problem key={i} x={problem.x} y={problem.y} sign={`+`} />;
	// 	});
	// };

	return <div className="problems">{getContent}</div>;
};

export default Problems;
