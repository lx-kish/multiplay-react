import React from 'react';

import content from '../../table.content';

import TabHeader from '../tab-header/tab-header.component';
import TabEmptyLine from '../tab-empty-line/tab-empty-line.component';
import TabLine from '../tab-line/tab-line.component';
// import TabCell from '../tab-cell/tab-cell.component';


//PLUS SIGN = &#x2b;
//MINUS SIGN = &#x2212;
const Tab = props => {

    const sign = () => {
        return <>&#x2b;</>
    }

    return (
        <main className='main'>
            <section className='tab'>
                <TabHeader sign={sign()}/>
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
                <TabHeader />
            </section>
        </main>
    )
};

export default Tab;