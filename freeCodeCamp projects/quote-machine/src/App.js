import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import { useState, useEffect} from 'react';

function App() {
	const [data, setData] = useState('');
	let url = 'https://swapi.dev/api/planets/'

	useEffect(() => {
		const fetchIt = async () => {
		const res = await fetch(url);
		var data = await res.json()

		setData(data)
		}

		fetchIt()

		console.log('initial render')
	}, [])


	function getRandomPlanet() {
		const dataResults = data.results

		var item = dataResults[Math.floor(Math.random() * dataResults.length)];

		return item
	}


	return (
		<div className='App'>
			<Header />
			<div className='content-container'>
				{
					!data ? 
						<div className='loading'>loading...</div> 
						: 
					<PlanetBox data={data} getRandomPlanet={getRandomPlanet}/>
				}	
			</div>
		</div>
	);
}

export default App;


