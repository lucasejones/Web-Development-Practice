import Button from './Button.js';
import twittericon from './images/twittericon.png';

function QuoteBox() {
	return(
		<div id='quote-box'>
			<h2 id='text'>"Quote goes here"</h2>
			<h5 id='author'>-Author</h5>

			<div id='new-quote'>
				<Button text='New Quote'/>
			</div>

			<a href='#' id='tweet-quote'>
				<img id='twitter-icon' src={twittericon} />
			</a>
		</div>
	);
}

export default QuoteBox;