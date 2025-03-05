import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROOMS_TO_PLAY } from '../../lib/constants/room-images';
import { useAuth } from '../../lib/hooks/useAuth';
import { useGame } from '../../lib/hooks/useGame';
import { getAllUsers, updateGameStats } from '../../lib/utils/database';
import './game-over.css';

const GameOver = () => {
	const [users, setUsers] = useState([]);
	const { user } = useAuth();
	const { points, level } = useGame();

	useEffect(() => {
		updateAndFetchUsers(user, level, points, setUsers);
	}, [user, level, points]); // Se ejecuta cuando el usuario o los puntos cambian

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
			<div>
				<div className='top-users'>
					<span>User</span>
					<p>Level</p>
					<p>Points</p>

					{users.map(user => (
						<>
							<span>{user.username}</span>
							<span>{user.max_level}</span>
							<span>{user.max_points}</span>
						</>
					))}
				</div>
				<Link to='/' className='button button-primary'>
					Volver a la pantalla inicial
				</Link>
			</div>
		</div>
	);
};

const updateAndFetchUsers = async (user, level, points, setUsers) => {
	if (user) {
		await updateGameStats(user.id, level, points);
	}
	getAllUsers(setUsers);
};

export default GameOver;
