import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Tab from '../../components/table/tab.component';

const MainPage = props => {

    /**
     * Single state hook useState for all the state properties
     */
    const [fullState, setFullState] = React.useState({
        sticky: 0,
        display: false,
        subtract: false,
    });

    /**
     * Returns mathematical sign for addition or subtraction
     * @return {html entity} sign code
     */
    const getSign = () => {
        return fullState.subtract ? <>&#x2212;</> : <>&#x2b;</>
    }

    /**
     * Gets and returns offsetTop of the 'header-stick' section
     * @return {Number} offsetTop
     */
    const getHeaderOffsetTop = () => {
        const header = document.getElementById('header-stick');
        return header.offsetTop;
    };

    /**
     * React hook useEffect for updating sticky state property
     * on display property changing
     */
    React.useEffect(() => {

        setFullState({
            ...fullState,
            sticky: getHeaderOffsetTop()
        })

    }, [fullState.display]);

    /**
     * React hook useEffect for stick header on scrolling
     */
    React.useEffect(() => {

        // setFullState({
        //     ...fullState,
        //     sticky: getHeaderOffsetTop()
        // })

        const scrollCallBack = window.addEventListener('scroll', () => {
            const header = document.getElementById('header-stick');
            if (window.pageYOffset >= fullState.sticky) { //sticky) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });

        return () => {
            window.removeEventListener('scroll', scrollCallBack);
        };
    }, [fullState.sticky]);

    return (
        <>
            <Header
                display={fullState.display}
                subtract={fullState.subtract}
                setChecked={() =>
                    setFullState({
                        ...fullState,
                        display: !fullState.display
                    })
                }
                setSubtract={() =>
                    setFullState({
                        ...fullState,
                        subtract: !fullState.subtract
                    })
                }
            />
            <Tab
                sticky={fullState.sticky}
                subtract={fullState.subtract}
                sign={getSign()}
            />
            <Footer />
        </>
    )
};

export default MainPage;