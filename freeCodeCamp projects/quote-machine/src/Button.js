function Button(props) {
	return(
		<div>
			<button 
				style={{
					padding: '0.5rem',
					fontSize: '1rem'
				}}
			>
			{props.text}
			</button>
		</div>
	);
}

export default Button;