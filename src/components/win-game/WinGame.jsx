import { useGame } from '../../lib/hooks/useGame';
import Ranking from '../ranking/Ranking';

const WinGame = () => {
	const { level, points } = useGame();
	return (
		<>
			<h2>Has Ganado!!</h2>
			<h3>Has llegado al nivel {level}</h3>
			<h4>Has conseguido un total de {points} puntos</h4>
			<Ranking />
		</>
	);
};

export default WinGame;
