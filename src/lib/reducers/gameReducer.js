import { GAME_ACTIONS } from '../constants/game-actions';
import { PHASES_INFO } from '../constants/phases-info';

export const initialState = {
	level: 1,
	errors: 0,
	points: 0,
	phase: PHASES_INFO.MEMORIZE,
	remainingTime: PHASES_INFO.MEMORIZE.time,
	canPlay: true,
	endGame: false,
	gameTime: 0
};

export const gameReducer = (gameState, { type }) => {
	switch (type) {
		case GAME_ACTIONS.NEXT_PHASE: {
			const nextPhase =
				gameState.phase === PHASES_INFO.READY
					? PHASES_INFO.PLAY
					: PHASES_INFO.READY;

			return {
				...gameState,
				phase: nextPhase,
				remainingTime: nextPhase.time
			};
		}

		case GAME_ACTIONS.NEXT_LEVEL: {
			const nextPhase =
				gameState.phase === PHASES_INFO.READY
					? PHASES_INFO.PLAY
					: PHASES_INFO.READY;

			const pointsForLevel = Math.round(
				gameState.points +
					gameState.remainingTime *
						10 *
						(gameState.remainingTime / gameState.phase.time)
			);
			return {
				...gameState,
				phase: nextPhase,
				level: gameState.level + 1,
				remainingTime: nextPhase.time,
				points: pointsForLevel
			};
		}

		case GAME_ACTIONS.INCREMENT_ERRORS: {
			const totalErrors = gameState.errors + 1;
			return {
				...gameState,
				errors: totalErrors,
				canPlay: totalErrors < 3
			};
		}

		case GAME_ACTIONS.DECREMENT_TIME: {
			return {
				...gameState,
				remainingTime: gameState.remainingTime - 1
			};
		}

		case GAME_ACTIONS.GAME_OVER: {
			return {
				...gameState,
				canPlay: false,
				endGame: false
			};
		}

		case GAME_ACTIONS.WIN_GAME: {
			return {
				...gameState,
				canPlay: false,
				endGame: true
			};
		}

		case GAME_ACTIONS.REESTART_GAME: {
			return {
				...initialState
			};
		}

		default:
			throw new Error('Invalid Action');
	}
};
