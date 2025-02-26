import { useEffect, useState } from 'react';

import './timer.css';

const Timer = ({ time, title, view, setView }) => {
	const [remainingTime, setRemainingTime] = useState(time);

	useEffect(() => {
		// Reiniciar el tiempo cuando cambia de fase
		setRemainingTime(time);
	}, [time, view]);

	useEffect(() => {
		if (remainingTime > 0) {
			const timeoutId = setTimeout(() => {
				setRemainingTime(remainingTime - 1);
			}, 1000);

			return () => clearTimeout(timeoutId);
		} else {
			setView(view + 1); // Cambia de vista cuando el tiempo llegue a 0
			setRemainingTime(time); // Reinicia el tiempo
		}
	}, [remainingTime, time, view, setView]);

	return (
		<>
			<h2 className='timer-title'>{title}</h2>
			<div
				className='timer'
				style={{ '--time': (remainingTime / time) * 100 }}
			/>
		</>
	);
};

// 11 - 100
// 10 - x
export default Timer;
