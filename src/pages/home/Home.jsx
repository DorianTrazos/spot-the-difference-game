import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import Slide from '../../components/slide/Slide';
import { reestartGame } from '../../lib/actions/game-actions';
import { reorderImages } from '../../lib/constants/room-images';
import { useAuth } from '../../lib/hooks/useAuth';
import { useGame } from '../../lib/hooks/useGame';
import { signInWithGoogle, signOut } from '../../lib/utils/auth';
import './home.css';

const images = [
	'/assets/images/room-1/1.png',
	'/assets/images/room-1/1.png',
	'/assets/images/room-1/1.png'
];

const Home = () => {
	const [showTutorial, setShowTutorial] = useState(false);
	const { canPlay, dispatch } = useGame();
	const { user, loading } = useAuth();

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
					{!loading && !user && (
						<button className='button button-login' onClick={signInWithGoogle}>
							Login
						</button>
					)}
					{user && (
						<>
							<p>{user.email}</p>
							<button className='button' onClick={signOut}>
								Log out
							</button>
						</>
					)}
				</div>
			</div>
			{showTutorial && <Modal closeModal={() => setShowTutorial(false)} />}
		</>
	);
};

export default Home;
