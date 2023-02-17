import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import PlanetsList from './PlanetsList.js'
import { useState, useEffect} from 'react';

export default function App() {
	const [data, setData] = useState(null);
	const [showResults, setShowResults] = useState(false)
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
		setShowResults(!showResults);
		if (count > 1) {
			setShowPlanet(true)
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
						{showResults && 
							<div className='welcome-box'>
								<p className='welcome-tag'>
									Welcome to the Star Wars Planet Explorer!
								</p>
								<p className='description'>
									Navigate to any planet using the menu below. Or, if you'd like, you can visit planets at random by clicking the random button.
								</p>
							</div>
						}
						{showResults && <PlanetsList data={data}/>}
						
						{showPlanet && <PlanetBox data={data} />}
					</>
				}	
			</div>
		</div>
	);
}


