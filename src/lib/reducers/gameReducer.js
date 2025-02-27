import { PHASES_INFO } from '../constants/phases-info';

export const initialState = {
	level: 1,
	errors: 0,
	phase: PHASES_INFO.MEMORIZE,
	remainingTime: PHASES_INFO.MEMORIZE.time
};

export const gameReducer = (gameState, { type }) => {
	switch (type) {
		case 'MEMORIZE_PHASE': {
			return {
				...gameState,
				phase: PHASES_INFO.MEMORIZE,
				remainingTime: PHASES_INFO.MEMORIZE.time
			};
		}
		case 'READY_PHASE': {
			return {
				...gameState,
				phase: PHASES_INFO.READY,
				remainingTime: PHASES_INFO.READY.time
			};
		}
		case 'PLAY_PHASE': {
			const playPhase = {
				...PHASES_INFO.PLAY
			};
			return { ...gameState, phase: playPhase, remainingTime: playPhase.time };
		}

		case 'NEXT_LEVEL': {
			// Alterna entre READY y PLAY en cada nivel
			const nextPhase =
				gameState.phase === PHASES_INFO.READY
					? PHASES_INFO.PLAY
					: PHASES_INFO.READY;

			return {
				...gameState,
				level:
					gameState.phase === PHASES_INFO.READY
						? gameState.level + 1
						: gameState.level,
				phase: nextPhase,
				remainingTime: nextPhase.time
			};
		}

		case 'DECREMENT_TIME': {
			return {
				...gameState,
				remainingTime: gameState.remainingTime - 1
			};
		}

		default:
			return gameState;
	}
};
