import React from 'react';

import content from '../../table.content';

const TabHeader = props => {

    return (

        <div className='tab__line--header' id={props.id}>
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