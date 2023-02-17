import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import PlanetsList from './PlanetsList.js'
import WelcomeBox from './WelcomeBox.js'
import { useState, useEffect} from 'react';

export default function App() {
	const [data, setData] = useState(null);
	const [showBeginning, setShowBeginning] = useState(false)
	const [showPlanet, setShowPlanet] = useState(false)
	const [count, setCount] = useState(0)
	let url = 'https://swapi.dev/api/planets/'

	useEffect(() => {
		console.log('initial render')

		async function fetchData() {
			const res = await fetch(url);
			var data = await res.json()
			
			setData(data.results)
			
		}

		fetchData();
	}, [])


	function handleClick() {
		setCount(prevCount => prevCount + 1)
		setShowBeginning(!showBeginning);
		if (count > 1) {
			// setShowPlanet(true)
		}
	}


	return (
		<div className='App'>
			<Header 
				onClick={handleClick}
			/>
			<div className='content-container'>
				{
					!data ? 
						<div className='loading'>loading...</div> 
						: 
					<>
						{!showBeginning && 
							<h3 className='prompt'>Click above to begin</h3>
						}
						
						{showBeginning && <WelcomeBox />}
						{showBeginning && <PlanetsList data={data}/>}
						
						{showPlanet && <PlanetBox data={data} />}
					</>
				}	
			</div>
		</div>
	);
}


