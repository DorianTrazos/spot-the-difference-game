import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROOMS_TO_PLAY } from '../../lib/constants/room-images';
import { useAuth } from '../../lib/hooks/useAuth';
import { useGame } from '../../lib/hooks/useGame';
import { getAllUsers, updateGameStats } from '../../lib/utils/database';
import './game-over.css';

const GameOver = () => {
	// const [gameTime, setGameTime] = useState(0);
	const [users, setUsers] = useState([]);
	const { user } = useAuth();
	const { points, level } = useGame();
	updateGameStats(user.id, level, points);

	console.log(users);
	useEffect(() => {
		// saveGameTimeInLocalStorage(setGameTime);
		getAllUsers(setUsers);
	}, []);

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
			{users.map(user => (
				<div key={user.id}>
					<h2>{user.username}</h2>
					<p>Level: {user.level}</p>
					<p>Points: {user.points}</p>
				</div>
			))}
			<Link to='/' className='button button-primary'>
				Volver a la pantalla inicial
			</Link>
		</div>
	);
};

export default GameOver;
