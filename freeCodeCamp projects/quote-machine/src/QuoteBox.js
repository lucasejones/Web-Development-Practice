import Button from './Button.js';
import twittericon from './images/twittericon.png';
import { useState, useEffect, useRef } from 'react';


function QuoteBox() {
	const [data, setData] = useState('');
	const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(false)
	let url = 'https://swapi.dev/api/planets/'
	// let url = 'http://jsonplaceholder.typicode.com/albums/'
	// let url = 'https://jsonplaceholder.typicode.com/users'
	// const url = 'https://api.adviceslip.com/advice';

	useEffect(() => {
		const fetchIt = async () => {
		const res = await fetch(url, {cache: 'no-cache'});
		var data = await res.json()

		setData(data)
		}

		fetchIt()
		console.log('re-rendered')
	}, [])

	// nothing needs to be passed in as a dependency in the array in order for the component to work. the two buttons are there to demonstrate that you can click either one and get the expected behavior.

	// how is this the expected behavior? all you did was toggle a state and the whole component re-rendered? what if you didn't want the whole component to re-render? do you always want the whole component to re-render on a state change?


	function handleClick() {
		// setCount(prevcount => prevcount + 1)
		setToggle(prevState => !prevState)
		console.log(toggle)
		// console.log(count)
	}

	function handleClick2() {
		setCount(prevcount => prevcount + 1)
		// setToggle(prevState => !prevState)
		// console.log(toggle)
		console.log(count)
	}
	 
	if (!data) {
		return <div>LOADING</div>
	}
  
	const ressies = data.results
	var item = ressies[Math.floor(Math.random() * ressies.length)];
	console.log('con', item, toggle, count)




	return(
		<div id='quote-box'>
			<h2 id='text'>{item.name}</h2>

			{/*{data.map(t => {
				return(
					<h2 key={t.id}>{t.name}</h2>
				)
				
			})}*/}


			<h5 id='author'>-Author</h5>

			<div id='new-quote'>
				{/*<Button OnClick={fetchData} text='New Quote'/>*/}

				<button onClick={handleClick}>toggle</button>
				<button onClick={handleClick2}>count</button>
					<h5>{count}</h5>
			</div>

			<a href='#1' id='tweet-quote'>
				<img id='twitter-icon' alt='twitter icon' src={twittericon} />
			</a>
		</div>
	);
}

export default QuoteBox;