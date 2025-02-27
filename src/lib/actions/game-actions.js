import { GAME_ACTIONS } from '../constants/game-actions';

export const nextPhase = () => ({
	type: GAME_ACTIONS.NEXT_PHASE
});

export const nextLevel = () => ({
	type: GAME_ACTIONS.NEXT_LEVEL
});

export const decrementTime = () => ({
	type: GAME_ACTIONS.DECREMENT_TIME
});

export const incrementErrors = () => ({
	type: GAME_ACTIONS.INCREMENT_ERRORS
});

export const gameOver = () => ({
	type: GAME_ACTIONS.GAME_OVER
});

export const reestartGame = () => ({
	type: GAME_ACTIONS.REESTART_GAME
});
