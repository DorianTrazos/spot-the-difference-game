import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import Slide from '../../components/slide/Slide';
import { reestartGame } from '../../lib/actions/game-actions';
import { reorderImages } from '../../lib/constants/room-images';
import { useGame } from '../../lib/hooks/useGame';
import './home.css';

const images = [
	'/assets/images/room-1/1.png',
	'/assets/images/room-1/1.png',
	'/assets/images/room-1/1.png'
];

const Home = () => {
	const [showTutorial, setShowTutorial] = useState(false);
	const { canPlay, dispatch } = useGame();
	useEffect(() => {
		if (!canPlay) {
			dispatch(reestartGame());
			reorderImages();
		}
	}, [canPlay, dispatch]);
	return (
		<>
			<div className='main-container'>
				<h1 className='main-title'>SPOT THE DIFFERENCES</h1>
				<Slide images={images} />
				<div className='buttons'>
					<div className='main-buttons'>
						<Link to='/game' className='button button-primary'>
							Start Game
						</Link>
						<button className='button' onClick={() => setShowTutorial(true)}>
							Tutorial
						</button>
					</div>
					<button className='button button-login'>Login</button>
				</div>
			</div>
			{showTutorial && <Modal closeModal={() => setShowTutorial(false)} />}
		</>
	);
};

export default Home;
