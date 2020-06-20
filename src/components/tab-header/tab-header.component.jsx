import React from 'react';

import content from '../../table.content';

const TabHeader = props => {

    React.useEffect(() => {
        const header = document.getElementById('header-stick');
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener('scroll', () => {
            if (window.pageYOffset >= sticky) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
        return () => {
            window.removeEventListener('scroll', scrollCallBack);
        };
    }, []);

    return (

        <div className='tab__line--header' id='header-stick'>
            <div className='tab__heading-cell tab__heading-cell--side'>&#xa0;</div>
            {[...Array(11)].map((x, i) =>
                i > 1 ?
                    <React.Fragment key={i}>
                        <div className='tab__empty-cell tab__empty-cell--head'>{props.sign}</div>
                        <div className={`tab__heading-cell ${content.styles[i]}`}>{i}</div>
                    </React.Fragment>
                    : null
            )}
            <div className='tab__heading-cell tab__heading-cell--side'>&#xa0;</div>
        </div>

    )
};

export default TabHeader;