import Button from './Button.js';
import twittericon from './images/twittericon.png';
import { useState, useEffect, useRef } from 'react';


function QuoteBox() {
	const [data, setData] = useState('');
	const [count, setCount] = useState(0);
	// let url = 'https://swapi.dev/api/planets/'
	// let url = 'http://jsonplaceholder.typicode.com/albums/'
	// let url = 'https://jsonplaceholder.typicode.com/users'
	const url = 'https://api.adviceslip.com/advice';

	useEffect(() => {
		const fetchIt = async () => {
		const res = await fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'});
		var data = await res.json()

		setData(data.slip.advice)
		}

		fetchIt()
	}, [count])


	function handleClick() {
		setCount(prevcount => prevcount + 1)
		// console.log(count)
	}
	 

	// useEffect(() => {
	// 	const fetchDat = async () => {
	// 		try {
	// 			var response = await fetch(url)
	// 			var daz = await response.json()
	// 			console.log('daz:', daz)
	// 			setData(daz)
	// 		} catch (error) {
	// 			console.log('errrrrr', error)
	// 		}
	// 	}
	// 	// document.title = `You clicked ${count} times`;
	// 	setData(count);
	// 	fetchDat();
	// }, [])


	

	// function handleClick() {
	// 	setCount(prevcount => prevcount + 1)
	// 	// try {
	// 	// 	fetchDat()
	// 	// } catch (error) {
	// 	// 	console.log('errrrrr2', error)
	// 	// }
	// }

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// const url = 'https://api.adviceslip.com/advice';
	// const fetchData = async () => {
	// 	try {
	// 		var response = await fetch(url);
	// 		var json = await response.json();
	// 		setData(json.slip.advice);
	// 	} catch (error) {
	// 		console.log('error:', error);
	// 	}
	// }

	

	

	// useEffect(() => {
	// 	swapps()
	// }, [])

	// const swapps = async () => {
	// 	const response = await fetch(url);
	// 	const dataz = await response.json()
	// 	setData(dataz)
	// }

	// var ressies = data.results

	// if (ressies) {
	// 	var item = ressies[Math.floor(Math.random() * ressies.length)];
	// 	console.log(item)
	// }	

	// if (!ressies) {
	// 	return <div>LOADING</div>
	// }

	// const fetchData = async () => {
	// 	const response = await fetch(url);
	// 	const datam = await response.json()
	// 	setData(datam)
	// }

	// useEffect(() => {
	// 	fetchData()
	// }, [])

	// const updateData = () => {
	// 	fetch(url)
	// 		.then(response => {
	// 			return response.json()
	// 		})
	// 		.then(datas => {
	// 			setData(datas)
	// 		})
	// }

	// var ressies = data.results

	// if (ressies) {
	// 	var item = ressies[Math.floor(Math.random() * ressies.length)];
	// 	console.log(item)
	// }	

	// console.log(data)

	// useEffect(() => {
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(json => console.log(json))
	// 		.then(datz => setData(datz))
	// 		.catch(err => console.log(err));
	// }, [])

	console.log(data)

	// if (!data) {
	// 	return <div>LOADING</div>
	// }

	return(
		<div id='quote-box'>
			{/*{ressies.map(thing => {
				return(
					<h2>{thing.name}</h2>
				)
			})}*/}
			{/*<h2 id='text'>"{item.name}"</h2>*/}
			{/*{data.map(t => {
				return(
					<h2 key={t.id}>{t.name}</h2>
				)
				
			})}*/}

			<h2>{data}</h2>

			<h5 id='author'>-Author</h5>

			<div id='new-quote'>
				{/*<Button OnClick={fetchData} text='New Quote'/>*/}
				{/*<button onClick={handleClick}>Click here</button>*/}
			<button onClick={handleClick}>Click here</button>
				<h5>{count}</h5>
			</div>

			<a href='#1' id='tweet-quote'>
				<img id='twitter-icon' alt='twitter icon' src={twittericon} />
			</a>
		</div>
	);
}

export default QuoteBox;