import { useGame } from '../../lib/hooks/useGame';

const ErrorsDisplay = () => {
	const { errors } = useGame();
	return (
		<div className='errors'>
			{[...Array(3)].map((_, i) => (
				<img
					key={i}
					className='info-icon'
					src={
						i < errors ? '/assets/icons/error.png' : '/assets/icons/lupa.png'
					}
					alt={i < errors ? 'Error' : 'Lupa'}
				/>
			))}
		</div>
	);
};

export default ErrorsDisplay;
