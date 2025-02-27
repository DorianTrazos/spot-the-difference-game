export const CONTEXT_OPTIONS = {
	EXTRA: {
		change: 'extra',
		text: 'Extra'
	},
	MISSING: {
		change: 'missing',
		text: 'Desaparecido'
	},
	POSITION: {
		change: 'position',
		text: 'Posición'
	},
	STATE: {
		change: 'state',
		text: 'Estado'
	},
	REPLACED: {
		change: 'replaced',
		text: 'Reemplazado'
	}
};

export const CONTEXT_MENU_OPTIONS = [
	CONTEXT_OPTIONS.EXTRA,
	CONTEXT_OPTIONS.MISSING,
	CONTEXT_OPTIONS.POSITION,
	CONTEXT_OPTIONS.STATE,
	CONTEXT_OPTIONS.REPLACED
].sort(() => Math.random() - 0.5);
