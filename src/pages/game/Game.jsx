import { useRef, useState } from 'react';
import ContextMenu from '../../components/context-menu/ContextMenu';
import Message from '../../components/message/Message';
import ReferenceImage from '../../components/reference-image/ReferenceImage';
import Timer from '../../components/timer/Timer';
import { PHASES_INFO } from '../../constants/phases-info';
import { PLAYER_GRID } from '../../constants/player-grid';
import { ROOMS_TO_PLAY } from '../../constants/room-images';
import './game.css';
const Game = () => {
	const [level, setLevel] = useState(1);
	const [points, setPoints] = useState(10000);
	const [view, setView] = useState(0);
	const [menuCoordinates, setMenuCoordinates] = useState(null);
	const [gridClick, setGridClick] = useState(null);
	const containerRef = useRef(null);
	const { time, title } = PHASES_INFO[view];
	return (
		<>
			<h1>SPOT THE DIFFERENCES</h1>
			<div className='header-game'>
				<span>Level {level}</span>
				<div className='header-info'>
					<span>Dorina</span>
					<span>{points}</span>
				</div>
			</div>
			<div className='game-container'>
				{view === 0 && (
					<ReferenceImage
						time={time}
						title={title}
						view={view}
						setView={setView}
					/>
				)}
				{view === 1 && (
					<Message time={time} title={title} view={view} setView={setView} />
				)}
				{view === 2 && (
					<div>
						<div
							ref={containerRef}
							className='image-container'
							style={{ '--room-image': `url(${ROOMS_TO_PLAY[level].image})` }}
							onClick={event =>
								showModalOptions(event, containerRef, setMenuCoordinates)
							}
						>
							{PLAYER_GRID.map(square => (
								<span
									key={square.row + square.column}
									className='tile'
									onClick={() => setGridClick(square.row + square.column)}
								>
									{square.row + square.column}
								</span>
							))}
							{menuCoordinates && (
								<ContextMenu
									menuCoordinates={menuCoordinates}
									level={level}
									setLevel={setLevel}
									setView={setView}
									gridClick={gridClick}
								/>
							)}
						</div>
						<Timer time={time} title={title} view={view} setView={setView} />
					</div>
				)}
			</div>
		</>
	);
};

const showModalOptions = (event, containerRef, setCoordinates) => {
	if (!containerRef.current) return;
	if (event.target.className === 'option') {
		setCoordinates(null);
		return;
	}
	const rect = containerRef.current.getBoundingClientRect();
	const top = event.clientY - (rect.top + 30) + 'px';
	const left = event.clientX - (rect.left - 30) + 'px';

	setCoordinates({ top, left });
};

export default Game;
