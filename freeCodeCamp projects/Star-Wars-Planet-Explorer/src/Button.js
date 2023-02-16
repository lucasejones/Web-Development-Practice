export default function Button({text, handleClick}) {
	return(
		<div>
			<button 
				className='button'
				onClick={handleClick}
			>
			{text}
			</button>
		</div>
	);
}
