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
				By navigating using the menu below, you can visit and learn all about your favorite planets! 
				<br />
				<br /> 
				For all you parsec buffs out there, if you consider a parsec a unit of time, we'll get you there in less than 12 of 'em. And if you consider a parsec a measure of distance...then you'd better hang on!
			</p>
		</div>
	)
}
