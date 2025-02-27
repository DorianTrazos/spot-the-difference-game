import { useReducer } from 'react';
import { GameContext } from '../contexts/GameContext';
import { gameReducer, initialState } from '../reducers/gameReducer';

const GameProvider = ({ children }) => {
	const [gameState, dispatch] = useReducer(gameReducer, initialState);
	return (
		<GameContext.Provider value={{ ...gameState, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider;
