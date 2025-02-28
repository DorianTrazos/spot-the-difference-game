import { useEffect } from 'react';
import ErrorsDisplay from '../../components/errors-display/ErrorsDisplay';
import GameInfo from '../../components/game-info/GameInfo';
import GameOver from '../../components/game-over/GameOver';
import RoomToPlay from '../../components/room-to-play/RoomToPlay';
import Timer from '../../components/timer/Timer';
import WinGame from '../../components/win-game/WinGame';
import { PHASES_INFO } from '../../lib/constants/phases-info';
import { useGame } from '../../lib/hooks/useGame';
import { saveGameTimeInLocalStorage } from '../../lib/utils/local-storage';
import './game.css';
const Game = () => {
	const { phase, canPlay, endGame } = useGame();

	useEffect(() => {
		saveGameTimeInLocalStorage();
	}, []);

	return (
		<>
			<h1 className='main-title'>SPOT THE DIFFERENCES</h1>
			{canPlay && (
				<>
					<GameInfo />
					<ErrorsDisplay />
					<div className='game-container'>
						{phase === PHASES_INFO.MEMORIZE && (
							<img src='/assets/images/room-1/1.png' />
						)}
						{phase === PHASES_INFO.PLAY && <RoomToPlay />}
						<Timer time={phase.time} title={phase.title} />
					</div>
				</>
			)}
			{!canPlay && !endGame && <GameOver />}
			{endGame && <WinGame />}
		</>
	);
};

export default Game;
