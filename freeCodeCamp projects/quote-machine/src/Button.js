function Button(props) {
	return(
		<div>
			<button 
				style={{
					padding: '0.5rem',
					fontSize: '1rem'
				}}
				onClick={props.handleClick}
			>
			{props.text}
			</button>
		</div>
	);
}

export default Button;