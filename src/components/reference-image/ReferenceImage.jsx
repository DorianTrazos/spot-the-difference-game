import Timer from '../timer/Timer';

const ReferenceImage = ({
	image = '/assets/images/room-1/1.png',
	time,
	title,
	view,
	setView
}) => {
	return (
		<>
			<img src={image} alt='reference image' />
			<Timer time={time} title={title} view={view} setView={setView} />
		</>
	);
};

export default ReferenceImage;
