import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MultiplicationTab from './pages/multiplication-tab/multiplication-tab.page';
import AdditionSubtraction from './pages/addition-subtraction/addition-subtraction.page';

// import PrivateRoute from './hoc/private-route/private-route.hoc';
// import PublicRoute from './hoc/public-route/public-route.hoc';

const Routes = () => {
	return (
		<Switch>
			<Route path="/multiplay-react" exact component={MultiplicationTab} />
			{/* <Route exact path="/" render={() => <Redirect to="/multiplication-tab" />} /> */}
			<Route path="/multiplay-react/multiplication-tab" exact component={MultiplicationTab} />
			<Route path="/multiplay-react/addition-subtraction" exact component={AdditionSubtraction} />
		</Switch>
	);
};

export default Routes;
