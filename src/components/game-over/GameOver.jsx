import { ROOMS_TO_PLAY } from '../../lib/constants/room-images';
import { useAuth } from '../../lib/hooks/useAuth';
import { useGame } from '../../lib/hooks/useGame';
import Ranking from '../ranking/Ranking';
import './game-over.css';

const GameOver = () => {
	const { user } = useAuth();
	const { points, level } = useGame();

	return (
		<div className='game-over-content'>
			<div>
				<h2 className='game-over-title'>PERDISTE</h2>
				<p>Has obtenido una puntuación total de {points} puntos!!!</p>
				<div className='images-compare'>
					<div className='image'>
						<img src='/assets/images/room-1/1.png' alt='original room' />
						<span>ORIGINAL</span>
					</div>
					<div className='image'>
						<img
							src={ROOMS_TO_PLAY[level].image.replace(
								'room-1',
								'room-1-solutions'
							)}
							alt='original room'
						/>
						<span>MODIFICADA</span>
					</div>
				</div>
			</div>
			<Ranking />
		</div>
	);
};

export default GameOver;
