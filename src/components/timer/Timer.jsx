import { useEffect } from 'react';
import { useGame } from '../../lib/hooks/useGame';
import './timer.css';

const Timer = () => {
	const { dispatch, phase, remainingTime } = useGame();
	const { time, title } = phase;

	// Asegurar que el width siempre esté en el rango 0-100%
	const timePercentage = Math.max(
		0,
		Math.min((remainingTime / time) * 100, 100)
	);
	console.log(timePercentage);
	useEffect(() => {
		if (remainingTime === 0) {
			dispatch({ type: 'NEXT_LEVEL' });
			return;
		}
		const timeoutId = setTimeout(
			() => dispatch({ type: 'DECREMENT_TIME' }),
			1000
		);
		return () => clearTimeout(timeoutId);
	}, [dispatch, remainingTime]);

	return (
		<>
			<h2 className='timer-title'>{title}</h2>
			<div
				className='timer'
				style={{ '--time': `${timePercentage}%` }} // Siempre exacto
			/>
			<span>{remainingTime}-</span>
			<span>{time}</span>
		</>
	);
};

export default Timer;
