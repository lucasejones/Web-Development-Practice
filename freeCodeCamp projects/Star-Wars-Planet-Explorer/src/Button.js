function Button(props) {
	return(
		<div>
			<button 
				className='button'
				onClick={props.handleClick}
			>
			{props.text}
			</button>
		</div>
	);
}

export default Button;