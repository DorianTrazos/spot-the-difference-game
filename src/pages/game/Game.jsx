import ErrorsDisplay from '../../components/errors-display/ErrorsDisplay';
import GameInfo from '../../components/game-info/GameInfo';
import RoomToPlay from '../../components/room-to-play/RoomToPlay';
import Timer from '../../components/timer/Timer';
import { PHASES_INFO } from '../../lib/constants/phases-info';
import { useGame } from '../../lib/hooks/useGame';
import './game.css';
const Game = () => {
	const { phase, canPlay } = useGame();

	return (
		<>
			<h1>SPOT THE DIFFERENCES</h1>
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
			{!canPlay && <h2>PERDISTE</h2>}
		</>
	);
};

export default Game;
