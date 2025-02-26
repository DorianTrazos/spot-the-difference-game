import { Route, Routes } from 'react-router-dom';
import Game from '../pages/game/Game';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/game' element={<Game />} />
		</Routes>
	);
};

export default Router;
