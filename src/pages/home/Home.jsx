import { Link } from 'react-router-dom';
import Slide from '../../components/slide/Slide';
import { useGame } from '../../lib/hooks/useGame';
import './home.css';

const images = [
	'/assets/images/room-1/1.png',
	'/assets/images/room-1/1.png',
	'/assets/images/room-1/1.png'
];

const Home = () => {
	const { dispatch } = useGame();
	return (
		<div className='main-container'>
			<h1 className='main-title'>SPOT THE DIFFERENCES</h1>
			<Slide images={images} />
			<div className='buttons'>
				<div className='main-buttons'>
					<Link
						to='/game'
						className='button button-primary'
						onClick={() => dispatch({ type: 'MEMORIZE' })}
					>
						Start Game
					</Link>
					<button className='button '>Tutorial</button>
				</div>
				<button className='button button-login'>Login</button>
			</div>
		</div>
	);
};

export default Home;
