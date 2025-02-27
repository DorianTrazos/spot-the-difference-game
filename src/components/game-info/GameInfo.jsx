import { useGame } from '../../lib/hooks/useGame';

const GameInfo = () => {
	const { level, points } = useGame();
	return (
		<div className='game-user-info'>
			<div className='info'>
				<div className='info-data'>
					<img className='info-icon' src='/assets/icons/user.png' alt='' />
					Dorian
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
		</div>
	);
};

export default GameInfo;
