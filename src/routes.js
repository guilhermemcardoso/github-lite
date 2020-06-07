import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import User from './pages/User';
import NotFound from './pages/NotFound';

function MainRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Search />} />
			<Route path='/users/:user' element={<User />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default MainRoutes;
