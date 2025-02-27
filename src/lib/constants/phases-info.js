const GAME_PHASES = {
	MEMORIZE: { title: 'Memoriza', time: 10 },
	READY: { title: '¿Listo?', time: 3 },
	PLAY: { title: '¿Qué Ha Cambiado?', time: 20 } // Base, pero aumentará con el nivel
};

export const PHASES_INFO = {
	MEMORIZE: GAME_PHASES.MEMORIZE,
	READY: GAME_PHASES.READY,
	PLAY: GAME_PHASES.PLAY
};
