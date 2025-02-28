import { Link } from 'react-router-dom';
import { ROOMS_TO_PLAY } from '../../lib/constants/room-images';
import { useGame } from '../../lib/hooks/useGame';
import './game-over.css';

const GameOver = () => {
	const { points, level } = useGame();
	return (
		<div className='game-over-content'>
			<h2 className='game-over-title'>PERDISTE</h2>
			<p>Has obtenido una puntuación total de {points} puntos!!!</p>
			<div className='images-compare'>
				<div className='image'>
					<img src='/assets/images/room-1/1.png' alt='original room' />
					<span>ORIGINAL</span>
				</div>
				<div className='image'>
					<img src={ROOMS_TO_PLAY[level].image} alt='original room' />
					<span>MODIFICADA</span>
				</div>
			</div>
			<Link to='/' className='button button-primary'>
				Volver a la pantalla inicial
			</Link>
		</div>
	);
};

export default GameOver;
