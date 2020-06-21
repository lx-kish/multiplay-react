import React from 'react';

import content from '../../table.content';

import TabHeader from '../tab-header/tab-header.component';
import TabEmptyLine from '../tab-empty-line/tab-empty-line.component';
import TabLine from '../tab-line/tab-line.component';
// import TabCell from '../tab-cell/tab-cell.component';


const Tab = props => {

    const sign = () => {
        //PLUS SIGN = &#x2b;
        //MINUS SIGN = &#x2212;
        // return <>&#x2b;</>
        return props.sign;
    }

    return (
        <main className='main'>
            <section className='tab'>
                <TabHeader
                    sign={sign()}
                    id={'header-stick'}
                />
                <TabEmptyLine sign={sign()} />
                {[...Array(11)].map((x, i) =>
                    i > 1 ?
                        <TabLine
                            key={i}
                            className={content.styles[i]}
                            value={i}
                            sign={sign()}
                        />
                        : null
                )}
                {/* <TabCell number={5} /> */}
                <TabHeader
                    sign={sign()}
                    id={''}
                />
            </section>
        </main>
    )
};

export default Tab;