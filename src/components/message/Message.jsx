import Timer from '../timer/Timer';

const Message = ({ time, title, view, setView }) => {
	return (
		<>
			<Timer time={time} title={title} view={view} setView={setView} />
		</>
	);
};

export default Message;
