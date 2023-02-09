import './App.css';
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


	// if (!props.data) {
	// 	return <div className='loading'>loading...</div>
	// }

	// function getRandom(data) {
	// 	return data.results[Math.floor(Math.random() * props.data.results.length)]
	// }

	return (
		<div className='App'>
			<h1 className='app-title'>26Pl6a63n63e63t6363 E63x63p63l3o3r3er85 </h1>
			<h1 className='app-title-small-screen'>2Pla3n3et5 6E6x6p6lorer8 </h1>
			<h2 className='rebel-symbol'>$</h2>
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


