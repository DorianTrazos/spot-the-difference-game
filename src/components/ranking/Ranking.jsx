import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/hooks/useAuth';
import { useGame } from '../../lib/hooks/useGame';
import { getAllUsers, updateGameStats } from '../../lib/utils/database';

const Ranking = () => {
	const [users, setUsers] = useState([]);
	const { user } = useAuth();
	const { points, level } = useGame();

	useEffect(() => {
		updateAndFetchUsers(user, level, points, setUsers);
	}, [user, level, points]); // Se ejecuta cuando el usuario o los puntos cambian

	return (
		<div>
			<div className='top-users'>
				<span>User</span>
				<p>Level</p>
				<p>Points</p>

				{users.map(user => (
					<Fragment key={user.username}>
						<span>{user.username}</span>
						<span>{user.max_level}</span>
						<span>{user.max_points}</span>
					</Fragment>
				))}
			</div>
			<Link to='/' className='button button-primary'>
				Volver a la pantalla inicial
			</Link>
		</div>
	);
};

const updateAndFetchUsers = async (user, level, points, setUsers) => {
	if (user) {
		await updateGameStats(user.id, level, points);
	}
	getAllUsers(setUsers);
};

export default Ranking;
