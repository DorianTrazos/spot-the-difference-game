import { Link } from 'react-router-dom';
import { useGame } from '../../lib/hooks/useGame';
import './game-over.css';

const GameOver = () => {
	const { points } = useGame();
	return (
		<div className='game-over-content'>
			<h2 className='game-over-title'>PERDISTE</h2>
			<p>Has obtenido una puntuación total de {points} puntos!!!</p>

			<Link to='/' className='button button-primary'>
				Volver a la pantalla inicial
			</Link>
		</div>
	);
};

export default GameOver;
