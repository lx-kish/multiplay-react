import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MultiplicationTab from './pages/multiplication-tab/multiplication-tab.page';
import AdditionSubtraction from './pages/addition-subtraction/addition-subtraction.page';

// import PrivateRoute from './hoc/private-route/private-route.hoc';
// import PublicRoute from './hoc/public-route/public-route.hoc';

const Routes = () => {
	return (
		<Switch>
				<Route path="/multiplication-tab" exact component={MultiplicationTab} />
				<Route path="/addition-subtraction" exact component={AdditionSubtraction} />
		</Switch>
	);
};

export default Routes;
