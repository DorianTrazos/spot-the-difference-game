import { CONTEXT_OPTIONS } from './context-menu-options';
const AVAILABLE_ROOMS = [
	{
		changes: null,
		image: '/assets/images/room-1/1.png'
	},
	{
		changes: ['K2', 'K3'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/2.png'
	},
	{
		changes: ['K1', 'K2', 'M1', 'M2'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/3.png'
	},
	{
		changes: ['H6', 'H7', 'H8', 'J6', 'J7', 'J8', 'L7', 'L8'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/4.png'
	},
	{
		changes: ['F2', 'F3', 'F4', 'H2', 'H3', 'H4'],
		changeType: CONTEXT_OPTIONS.POSITION.change,
		image: '/assets/images/room-1/5.png'
	},
	{
		changes: ['N7', 'N8'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/6.png'
	},
	{
		changes: ['Q8'],
		changeType: CONTEXT_OPTIONS.EXTRA.change,
		image: '/assets/images/room-1/7.png'
	},
	{
		changes: ['E5', 'E6', 'G5', 'G6', 'I5', 'I6', 'K5', 'K6'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/8.png'
	},
	{
		changes: ['C9'],
		changeType: CONTEXT_OPTIONS.EXTRA.change,
		image: '/assets/images/room-1/9.png'
	},
	{
		changes: ['K9', 'L0'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/10.png'
	},
	{
		changes: [
			'I9',
			'K7',
			'K8',
			'M7',
			'M8',
			'M9',
			'N0',
			'N1',
			'N2',
			'N3',
			'P0',
			'P1'
		],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/11.png'
	},
	{
		changes: ['I3'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/12.png'
	},
	{
		changes: ['O5', 'Q5'],
		changeType: CONTEXT_OPTIONS.REPLACED.change,
		image: '/assets/images/room-1/13.png'
	},
	{
		changes: ['N7', 'N8', 'N9', 'P5', 'P6', 'P7', 'P8', 'P9', 'R6'],
		changeType: CONTEXT_OPTIONS.APPEARANCE.change,
		image: '/assets/images/room-1/14.png'
	},
	{
		changes: ['N4'],
		changeType: CONTEXT_OPTIONS.POSITION.change,
		image: '/assets/images/room-1/15.png'
	},
	{
		changes: ['O2', 'M2'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/16.png'
	},
	{
		changes: ['I7', 'I8'],
		changeType: CONTEXT_OPTIONS.POSITION.change,
		image: '/assets/images/room-1/17.png'
	},
	{
		changes: ['F0'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/18.png'
	},
	{
		changes: ['O7'],
		changeType: CONTEXT_OPTIONS.EXTRA.change,
		image: '/assets/images/room-1/19.png'
	},
	{
		changes: ['L1'],
		changeType: CONTEXT_OPTIONS.REPLACED.change,
		image: '/assets/images/room-1/20.png'
	},
	{
		changes: ['R4', 'P4'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/21.png'
	},
	{
		changes: ['I2'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/22.png'
	},
	{
		changes: ['M9'],
		changeType: CONTEXT_OPTIONS.POSITION.change,
		image: '/assets/images/room-1/23.png'
	},
	{
		changes: ['L8'],
		changeType: CONTEXT_OPTIONS.POSITION.change,
		image: '/assets/images/room-1/24.png'
	},
	{
		changes: ['J2', 'J3', 'J4', 'L2', 'L3', 'L4', 'L5', 'N4'],
		changeType: CONTEXT_OPTIONS.POSITION.change,
		image: '/assets/images/room-1/25.png'
	},
	{
		changes: ['M3'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/26.png'
	},
	{
		changes: ['L4', 'L5', 'N5'],
		changeType: CONTEXT_OPTIONS.EXTRA.change,
		image: '/assets/images/room-1/27.png'
	},
	{
		changes: ['S8', 'Q8'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/28.png'
	},
	{
		changes: ['K5'],
		changeType: CONTEXT_OPTIONS.EXTRA.change,
		image: '/assets/images/room-1/29.png'
	},
	{
		changes: ['H3', 'F3'],
		changeType: CONTEXT_OPTIONS.REPLACED.change,
		image: '/assets/images/room-1/30.png'
	},
	{
		changes: ['M2', 'M1', 'K2'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/31.png'
	},
	{
		changes: ['H6', 'H7', 'H8', 'J6', 'J7', 'J8', 'L7', 'L8'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/32.png'
	},
	{
		changes: ['E5', 'E6', 'G5', 'G6', 'I5', 'I6', 'K5', 'K6'],
		changeType: CONTEXT_OPTIONS.STATE.change,
		image: '/assets/images/room-1/33.png'
	},
	{
		changes: ['Q5'],
		changeType: CONTEXT_OPTIONS.MISSING.change,
		image: '/assets/images/room-1/34.png'
	},
	{
		changes: ['M3', 'J5', 'L4', 'L5'],
		changeType: CONTEXT_OPTIONS.POSITION.change,
		image: '/assets/images/room-1/35.png'
	},
	{
		changes: ['Q9'],
		changeType: CONTEXT_OPTIONS.APPEARANCE.change,
		image: '/assets/images/room-1/36.png'
	},
	{
		changes: ['L8'],
		changeType: CONTEXT_OPTIONS.EXTRA.change,
		image: '/assets/images/room-1/37.png'
	},
	{
		changes: ['L0'],
		changeType: CONTEXT_OPTIONS.REPLACED.change,
		image: '/assets/images/room-1/38.png'
	}
];

const shuffleRoomChanges = () => {
	const firstElement = AVAILABLE_ROOMS[0];
	const restElements = AVAILABLE_ROOMS.slice(1);

	restElements.sort(() => Math.random() - 0.5);

	return [firstElement, ...restElements];
};

let ROOMS_TO_PLAY = shuffleRoomChanges();
// let ROOMS_TO_PLAY = AVAILABLE_ROOMS;

const reorderImages = () => {
	ROOMS_TO_PLAY = shuffleRoomChanges();
};

export { reorderImages, ROOMS_TO_PLAY };
