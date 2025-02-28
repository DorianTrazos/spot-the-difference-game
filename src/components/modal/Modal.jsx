import './modal.css';

const Modal = ({ closeModal }) => {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<img
					className='modal-close'
					src='/assets/icons/close-button.png'
					alt='close button icon'
					onClick={closeModal}
				/>
				<h2 className='modal-title'>Instrucciones del Juego</h2>
				<ul>
					<li>
						<span className='emphasis'>Memoriza la imagen:</span> Tendrás
						<span className='emphasis'>20 segundos</span> para observar y
						memorizar la imagen original.
					</li>
					<li>
						<span className='emphasis'>Encuentra el cambio:</span> Una vez
						pasado el tiempo, aparecerá una nueva imagen y deberás identificar
						<span className='emphasis'> qué ha cambiado</span>.
					</li>
					<li>
						<span className='emphasis'>Tipos de cambios posibles:</span> Los
						cambios pueden pertenecer a
						<span className='emphasis'> seis categorías</span> diferentes:
					</li>
					<ul>
						<li>
							<span className='emphasis'>Extra:</span> Ha aparecido un nuevo
							objeto que antes no estaba.
						</li>
						<li>
							<span className='emphasis'>Desaparecido:</span> Un objeto que
							estaba en la imagen original ha desaparecido.
						</li>
						<li>
							<span className='emphasis'>Posición:</span> Un objeto se ha movido
							a una ubicación diferente o ha rotado.
						</li>
						<li>
							<span className='emphasis'>Estado:</span> Un objeto ha cambiado su
							condición (por ejemplo, abierto/cerrado, encendido/apagado, etc.).
						</li>
						<li>
							<span className='emphasis'>Reemplazado:</span> Un objeto ha sido
							sustituido por otro.
						</li>
						<li>
							<span className='emphasis'>Apariencia:</span> Un objeto ha
							cambiado su color, textura o forma sin ser sustituido.
						</li>
					</ul>
				</ul>
				<p>
					¡Afina tu capacidad de observación y encuentra el cambio lo más rápido
					posible! 🚀
				</p>
			</div>
		</div>
	);
};

export default Modal;
