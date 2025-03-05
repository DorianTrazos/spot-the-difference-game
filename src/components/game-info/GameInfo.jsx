import { useAuth } from '../../lib/hooks/useAuth';
import { useGame } from '../../lib/hooks/useGame';
import ErrorsDisplay from '../errors-display/ErrorsDisplay';

const GameInfo = () => {
	const { level, points } = useGame();
	const { user } = useAuth();
	return (
		<div className='game-user-info'>
			<div className='info'>
				<div className='info-data'>
					<img className='info-icon' src='/assets/icons/user.png' alt='' />
					{user?.user_metadata.name || 'Nobody'}
				</div>
			</div>
			<div className='info'>
				<div className='info-data'>
					<img className='info-icon' src='/assets/icons/level.png' alt='' />
					{level}
				</div>
			</div>
			<div className='info'>
				<div className='info-data'>
					<img className='info-icon' src='/assets/icons/coin.png' alt='' />{' '}
					{points}
				</div>
			</div>
			<ErrorsDisplay />
		</div>
	);
};

export default GameInfo;
