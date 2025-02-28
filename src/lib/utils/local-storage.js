export const getGameTime = () => {
	const diffMs = endTime - startTime;

	const seconds = Math.floor(diffMs / 1000) % 60;
	const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
	const hours = Math.floor(diffMs / (1000 * 60 * 60));

	return diffMs;
};

export const saveGameTimeInLocalStorage = setGameTime => {
	const savedTime = localStorage.getItem('game-time');

	if (!savedTime) {
		const startTime = Date.now();
		localStorage.setItem(
			'game-time',
			JSON.stringify({ startTime: startTime, endTime: 0 })
		);
		return;
	}

	const { startTime, endTime } = JSON.parse(localStorage.getItem('game-time'));

	if (startTime && endTime === 0) {
		localStorage.setItem(
			'game-time',
			JSON.stringify({ startTime: startTime, endTime: Date.now() })
		);
		if (setGameTime) {
			const diffMs = endTime - startTime;
			setGameTime(diffMs);
		}
	} else {
		localStorage.setItem(
			'game-time',
			JSON.stringify({ startTime: Date.now(), endTime: 0 })
		);
	}
};
