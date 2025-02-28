import {
	incrementErrors,
	nextLevel,
	winGame
} from '../../lib/actions/game-actions';
import { CONTEXT_MENU_OPTIONS } from '../../lib/constants/context-menu-options';
import { ROOMS_TO_PLAY } from '../../lib/constants/room-images';
import { useGame } from '../../lib/hooks/useGame';
import './context-menu.css';

const ContextMenu = ({ menuCoordinates, gridClick, roomToPlay }) => {
	const { dispatch } = useGame();

	return (
		<ul
			className='option-list'
			style={{ '--top': menuCoordinates.top, '--left': menuCoordinates.left }}
		>
			{CONTEXT_MENU_OPTIONS.map(option => (
				<li
					key={option.change}
					className='option'
					onClick={() =>
						selectChange(roomToPlay, gridClick, option.change, dispatch)
					}
				>
					{option.text}
				</li>
			))}
		</ul>
	);
};

const selectChange = (roomToPlay, gridClick, option, dispatch) => {
	const isLastLevel = ROOMS_TO_PLAY.at(-1) === roomToPlay;

	if (!roomToPlay.changes.includes(gridClick)) {
		dispatch(incrementErrors());
		return;
	}

	if (roomToPlay.changeType === option) {
		isLastLevel ? dispatch(winGame()) : dispatch(nextLevel());
	} else if (roomToPlay.changeType !== option) {
		dispatch(incrementErrors());
	}
};

export default ContextMenu;
