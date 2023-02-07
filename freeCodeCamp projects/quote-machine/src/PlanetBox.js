import Button from './Button.js';
// import twittericon from './images/twittericon.png';
import Naboo from './Naboo.jpg';
import { useState, useEffect} from 'react';


function PlanetBox() {
	const [data, setData] = useState('');
	const [toggle, setToggle] = useState(false)
	let url = 'https://swapi.dev/api/planets/'

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
		return <div className='loading'>loading...</div>
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

	// display a semitransparent background image of the planet described
	// assign some slight and themed bg color swap depending on planet
	// fix all the unstructured css


	return(
		<div id='planet-box'>
			{/*<img className='planet-bg' src={Naboo} alt='Naboo'/>*/}
			<h1 id='planet-title'>{item.name === 'Yavin IV' ? 'Yavin 4' : item.name}</h1>

			<div className='fetched'>
				<div className='fetched-keys'>
					{keys.map(i => {
						return(
							<li className='fetched-item' key={i}>{i}:</li>
						)
							
						})

					}
				</div>
				<div className='fetched-values'>
					{values.map(i => {
						return(
							<li className='fetched-item' key={i}>{i}</li>
						)
							
						})

					}
				</div>
			</div>

			<div id='new-planet'>
				<Button handleClick={handleClick} id='new-planet-text' text='Visit New Planet'/>
			</div>

			{/*<a href='#1' id='tweet-quote'>
				<img id='twitter-icon' alt='twitter icon' src={twittericon} />
			</a>*/}
		</div>
	);
}

export default PlanetBox;
