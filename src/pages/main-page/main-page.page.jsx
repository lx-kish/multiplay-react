import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Tab from '../../components/table/tab.component';

const MainPage = props => {

    return (
        <React.Fragment>
            <Header />
            <Tab />
            <Footer />
        </React.Fragment>
    )
};

export default MainPage;