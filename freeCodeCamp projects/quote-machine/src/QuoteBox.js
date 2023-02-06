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
	console.log(ressies)
	var item = ressies[Math.floor(Math.random() * ressies.length)];
	console.log(item)

	var keys = []
	var values = []

	Object.keys(item).slice(0, -5).map((key, index) => {
		keys.push(key);
		values.push(item[key])
	})

	for (let i = 0; i < keys.length; i++) {
		keys[i] = keys[i].replace(/_/g, ' ');
	}

	// get the quotebox to be one consistent size
	// fix the bottom of the page to be a consistent gap
	// place the fetched data in the same spot each time in the box
	// display a semitransparent background image of the planet described
	// assign some slight and themed bg color swap depending on planet
	// call it something cool
	// get rid of the twitter thing
	

	return(
		<div id='quote-box'>
			{/*<h2 id='text'>"Quote Goes Here"</h2>*/}
			<h2 id='text'>{item.name}</h2>


			<div className='fetched'>
				<div className='fetched-keys'>
					{keys.map(i => {
						return(
							<li className='fetched-data' key={i}>{i}:</li>
						)
							
						})

					}
				</div>
				<div className='fetched-values'>
					{values.map(i => {
						return(
							<li className='fetched-data' key={i}>{i}</li>
						)
							
						})

					}
				</div>
			</div>

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
