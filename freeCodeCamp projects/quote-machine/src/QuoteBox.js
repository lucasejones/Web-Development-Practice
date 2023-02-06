import Button from './Button.js';
import twittericon from './images/twittericon.png';
import { useState, useEffect, useRef } from 'react';


function QuoteBox() {
	const [data, setData] = useState('');
	const [toggle, setToggle] = useState(false)
	let url = 'https://swapi.dev/api/planets/'
	// let url = 'http://jsonplaceholder.typicode.com/albums/'
	// let url = 'https://jsonplaceholder.typicode.com/users'
	// const url = 'https://api.adviceslip.com/advice';

	useEffect(() => {
		const fetchIt = async () => {
		const res = await fetch(url);
		var data = await res.json()

		setData(data)
		}

		fetchIt()
		console.log('re-rendered')
	}, [])


	function handleClick() {
		setToggle(prevState => !prevState)
	}

	 
	if (!data) {
		return <div>LOADING</div>
	}
  
	const ressies = data.results
	var item = ressies[Math.floor(Math.random() * ressies.length)];
	console.log(item)


	return(
		<div id='quote-box'>
			{/*<h2 id='text'>"Quote Goes Here"</h2>*/}
			<h2 id='text'>{item.name}</h2>

			{Object.keys(item).slice(0, -5).map((key, index) => {
				return(
					<li className='fetched_details' key={index}>
						{key}: {item[key]}
					</li>
				)
				})
			}
			{/*get the layout of the overall page to work (should look the way it did with just the placeholder "Quote Goes Here' element, lots of space at top of page, etc*/}

			<h5 id='author'>-Author</h5>
			<div id='new-quote'>
				<Button handleClick={handleClick} text='New Quote'/>
			</div>

			<a href='#1' id='tweet-quote'>
				<img id='twitter-icon' alt='twitter icon' src={twittericon} />
			</a>
		</div>
	);
}

export default QuoteBox;
