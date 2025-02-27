import { BrowserRouter } from 'react-router-dom';
import GameProvider from './lib/providers/GameProvider';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GameProvider>
				<Router />
			</GameProvider>
		</BrowserRouter>
	);
};

export default App;
