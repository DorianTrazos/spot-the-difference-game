import { useEffect } from 'react';
import {
	decrementTime,
	gameOver,
	nextPhase
} from '../../lib/actions/game-actions';
import { PHASES_INFO } from '../../lib/constants/phases-info';
import { useGame } from '../../lib/hooks/useGame';
import './timer.css';

const Timer = () => {
	const { dispatch, phase, remainingTime } = useGame();
	const { time, title } = phase;

	// const timePercentage = (remainingTime / time) * 100;

	useEffect(() => {
		if (remainingTime === 0) {
			changePhase(phase, dispatch);
			return;
		}

		const timeoutId = setTimeout(() => dispatch(decrementTime()), 1000);
		return () => clearTimeout(timeoutId);
	}, [dispatch, remainingTime, phase]);

	return (
		<>
			<span className='timer-title'>{title}</span>
			{/* <div className='timer' style={{ '--time': `${timePercentage / 1.2}%` }} /> */}
			<span className='remaining-time'>{remainingTime}</span>
		</>
	);
};

const changePhase = (phase, dispatch) => {
	console.log(phase);
	if (phase === PHASES_INFO.MEMORIZE || phase === PHASES_INFO.READY) {
		dispatch(nextPhase());
	} else if (phase === PHASES_INFO.PLAY) {
		dispatch(gameOver());
	}
};

export default Timer;
