import Button from './Button.js';
import twittericon from './images/twittericon.png';
import { useState, useEffect } from 'react';


function QuoteBox() {
	const [data, setData] = useState([]);
	let url = 'https://swapi.dev/api/planets/'
	// let url = 'http://jsonplaceholder.typicode.com/albums/'


	useEffect(() => {
		swapps()
	}, [])

	const swapps = async () => {
		const response = await fetch(url);
		const dataz = await response.json()
		setData(dataz)
	}

	var ressies = data.results

	if (ressies) {
		var item = ressies[Math.floor(Math.random() * ressies.length)];
		console.log(item)
	}	

	if (!ressies) {
		return <div>LOADING</div>
	}

	return(
		<div id='quote-box'>
			{/*<h2 id='text'>"Quote goes here"</h2>*/}

			{/*{ressies.map(thing => {
				return(
					<h2>{thing.name}</h2>
				)
			})}*/}
			<h2 id='text'>"{item.name}"</h2>

			<h5 id='author'>-Author</h5>

			<div id='new-quote'>
				<Button text='New Quote'/>
			</div>

			<a href='#1' id='tweet-quote'>
				<img id='twitter-icon' alt='twitter icon' src={twittericon} />
			</a>
		</div>
	);
}

export default QuoteBox;