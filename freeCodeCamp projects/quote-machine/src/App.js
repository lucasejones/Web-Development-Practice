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

		setData(data.results)
		}

		fetchIt()

		console.log('initial render')
	}, [])
	

	// function updateRemainingPlanets(planetsArray, currentPlanet) {
	// 	const index = planetsArray.indexOf(currentPlanet)
	// 	planetsArray.splice(index, 1)
	// 	// console.log('remaining planets', planetsArray)
	// 	return planetsArray
	// }

	// function restoreRemainingPlanets(previouslyEmpty, full) {
	// 	return previouslyEmpty.concat(full)
	// }


	return (
		<div className='App'>
			<Header />
			<div className='content-container'>
				{
					!data ? 
						<div className='loading'>loading...</div> 
						: 
					<PlanetBox data={data} />
				}	
			</div>
		</div>
	);
}

export default App;


