import Timer from '../../components/timer/Timer';
import { useGame } from '../../lib/hooks/useGame';
import './game.css';
const Game = () => {
	const { phase, dispatch } = useGame();
	return (
		<>
			<h1>SPOT THE DIFFERENCES</h1>
			<button onClick={() => dispatch({ type: 'NEXT_LEVEL' })}>
				NEXT LEVEL
			</button>
			<Timer time={phase.time} title={phase.title} />
		</>
	);
};

export default Game;
