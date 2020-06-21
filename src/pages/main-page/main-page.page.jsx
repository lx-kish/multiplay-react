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
        checked: false,
        sign: <>&#x2b;</>
    });

    /**
     * Gets offsetTop of the 'header-stick' section for sticking
     * @return {Number} offsetTop
     */
    const getHeaderOffsetTop = () => {
        const header = document.getElementById('header-stick');
        return header.offsetTop;
    };

    /**
     * React hook useEffect for updating sticky state property
     * on checked property changing
     */
    React.useEffect(() => {

        setFullState({
            ...fullState,
            sticky: getHeaderOffsetTop()
        })

    }, [fullState.checked]);

    /**
     * React hook useEffect for stick header on scrolling
     */
    React.useEffect(() => {

        setFullState({
            ...fullState,
            sticky: getHeaderOffsetTop()
        })

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
                checked={fullState.checked}
                setChecked={() =>
                    setFullState({
                        ...fullState,
                        checked: !fullState.checked
                    })
                }
            />

            <Tab
                sticky={fullState.sticky}
                sign={fullState.sign}
            />
            <Footer />
        </>
    )
};

export default MainPage;