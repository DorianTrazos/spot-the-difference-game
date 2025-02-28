import { useEffect, useRef, useState } from 'react';
import { PLAYER_GRID } from '../../lib/constants/player-grid';
import { ROOMS_TO_PLAY } from '../../lib/constants/room-images';
import { useGame } from '../../lib/hooks/useGame';
import ContextMenu from '../context-menu/ContextMenu';

const RoomToPlay = () => {
	const { level } = useGame();
	const containerRef = useRef(null);
	const [menuCoordinates, setMenuCoordinates] = useState(null);
	const [gridClick, setGridClick] = useState(null);
	const roomToPlay = ROOMS_TO_PLAY[level];

	useEffect(() => {
		window.addEventListener('click', event =>
			handleClickOutOfBounds(event, setMenuCoordinates)
		);

		return () =>
			window.removeEventListener('click', event =>
				handleClickOutOfBounds(event, setMenuCoordinates)
			);
	});

	return (
		<>
			<div
				ref={containerRef}
				className='image-container'
				// style={{ '--room-image': `url(${roomToPlay.image})` }}
				onClick={event =>
					showModalOptions(event, containerRef, setMenuCoordinates)
				}
			>
				<img
					className='image-to-play'
					src={roomToPlay.image}
					alt='room image'
				/>
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
						gridClick={gridClick}
						roomToPlay={roomToPlay}
					/>
				)}
			</div>
		</>
	);
};

const handleClickOutOfBounds = (event, setMenuCoordinates) => {
	if (!event.target.classList.contains('tile')) {
		setMenuCoordinates(null);
	}
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

export default RoomToPlay;
