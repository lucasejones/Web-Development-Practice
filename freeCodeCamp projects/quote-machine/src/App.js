import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import { useState, useEffect} from 'react';

function App() {
	const [data, setData] = useState('');
	// const dynamicArr = data.slice()
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


	
	// function getRandomPlanet(remainingPlanets) {
	// 	const selectedPlanet = remainingPlanets[Math.floor(Math.random() * remainingPlanets.length)]
	// 	// console.log('selected', selectedPlanet)
	// 	return selectedPlanet
	// }


	

	
	function updateRemainingPlanets(planetsArray, currentPlanet) {
		const index = planetsArray.indexOf(currentPlanet)
		planetsArray.splice(index, 1)
		// console.log('remaining planets', planetsArray)
		return planetsArray
	}

	// function restoreRemainingPlanets(previouslyEmpty, full) {
	// 	return previouslyEmpty.concat(full)
	// }

	function getRandomIndex(totalIndices) {
			return Math.floor(Math.random() * (totalIndices - 1))
		}



	return (
		<div className='App'>
			<Header />
			<div className='content-container'>
				{
					!data ? 
						<div className='loading'>loading...</div> 
						: 
					<PlanetBox 
						data={data} 
						// dynamicArr={dynamicArr}
						index={getRandomIndex(data.length)}
						getRandomIndex={getRandomIndex}
						// getRandomPlanet={getRandomPlanet}
						updateRemainingPlanets={updateRemainingPlanets}
					/>
				}	
			</div>
		</div>
	);
}

export default App;


