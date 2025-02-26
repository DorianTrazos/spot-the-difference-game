import { ROOMS_TO_PLAY } from '../../constants/room-images';

const ContextMenu = ({
	menuCoordinates,
	level,
	setLevel,
	gridClick,
	setView
}) => {
	return (
		<ul
			className='option-list'
			style={{ '--top': menuCoordinates.top, '--left': menuCoordinates.left }}
		>
			<li
				className='option'
				onClick={() =>
					selectChange(level, setLevel, gridClick, 'extra', setView)
				}
			>
				Extra
			</li>
			<li
				className='option'
				onClick={() =>
					selectChange(level, setLevel, gridClick, 'dissapear', setView)
				}
			>
				Desaparecido
			</li>
			<li
				className='option'
				onClick={() =>
					selectChange(level, setLevel, gridClick, 'modified', setView)
				}
			>
				Modificado
			</li>
			<li
				className='option'
				onClick={() =>
					selectChange(level, setLevel, gridClick, 'replaced', setView)
				}
			>
				Reemplazado
			</li>
		</ul>
	);
};

const selectChange = (level, setLevel, gridClick, change, setView) => {
	const selectedRoom = ROOMS_TO_PLAY[level];

	if (!selectedRoom.changes.includes(gridClick)) {
		console.log('AHÍ NO HAY CAMBIOS');
		return;
	}

	if (selectedRoom.changeType === change) {
		setLevel(level + 1);
		setView(1);
	}
};

export default ContextMenu;
