import './slide.css';

const Slide = ({ images }) => {
	const duplicateImages = [...images, ...images];

	return (
		<div className='slide'>
			<div className='slide-track'>
				{duplicateImages.map((image, index) => (
					<img key={index} className='slide-image' src={image} alt='Slide' />
				))}
			</div>
		</div>
	);
};

export default Slide;
