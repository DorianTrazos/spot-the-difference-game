import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './lib/providers/AuthProvider';
import GameProvider from './lib/providers/GameProvider';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<GameProvider>
					<Router />
				</GameProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
