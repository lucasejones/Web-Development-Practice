export default function WelcomeBox({ onCloseWelcome }) {
	return(
		<div className='welcome-box'>
			<span 
				className='close-welcome'
				onClick={onCloseWelcome}
			>
				X
			</span>
			<p className='welcome-tag'>
				Welcome to the Star Wars Planet Explorer!
			</p>
			<p className='description'>
				By navigating using the menu below, you can visit any of the most famous planets from Star Wars. Along the way, you'll learn some impressively specific information about each one. Feel free to resize the window, or to try out the "visit random planet" button!
			</p>
		</div>
	)
}
