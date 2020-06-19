import React from 'react';

import content from '../../table.content';

import TabCell from '../../components/tab-cell/tab-cell.component';
import TabEmptyCell from '../../components/tab-empty-cell/tab-empty-cell.component';

const TabLine = props => {

    return (
        <div className={`tab__line ${props.className}`}>
            <div className={`tab__heading-cell tab__heading-cell--side ${content.styles[props.value]}`}>{props.value}</div>
            {[...Array(11)].map((x, i) =>
                i > 1 ?
                    <React.Fragment key={i}>
                        <TabEmptyCell
                            className='tab__empty-cell'
                            sign={props.sign}
                        />
                        <TabCell                            
                            line={props.value}
                            value={i * props.value}
                        />
                    </React.Fragment>
                    : null
            )}
            <div className={`tab__heading-cell tab__heading-cell--side ${content.styles[props.value]}`}>{props.value}</div>
        </div>
    )
};

export default TabLine;