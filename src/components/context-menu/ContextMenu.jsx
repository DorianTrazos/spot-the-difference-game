import { incrementErrors, nextLevel } from '../../lib/actions/game-actions';
import { CONTEXT_MENU_OPTIONS } from '../../lib/constants/context-menu-options';
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
	if (!roomToPlay.changes.includes(gridClick)) {
		dispatch(incrementErrors());
		return;
	}

	if (roomToPlay.changeType === option) {
		dispatch(nextLevel());
	} else if (roomToPlay.changeType !== option) {
		dispatch(incrementErrors());
	}
};

export default ContextMenu;
