import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import PlanetsList from './PlanetsList.js'
import WelcomeBox from './WelcomeBox.js'
import { useState, useEffect} from 'react';

export default function App() {
	const [data, setData] = useState(null);

	const [showWelcome, setShowWelcome] = useState(false)
	const [showList, setShowList] = useState(false)
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
		if (showWelcome) {
			return;
		}
		setShowWelcome(!showWelcome)

		if (count === 0) {
			setShowList(true)
		}
	}


	function closeWelcome() {
		setShowWelcome(false);
	}

	// the entrance behavior and the toggle welcome behavior should be in two different functions. this is convoluted
	// also, your welcome close behavior needs work
	


	return (
		<div className='App'>
			<Header 
				onClick={handleClick}
				isClickable={!showWelcome}
			/>
			<div className='content-container'>
				{
					!data ? 
						<div className='loading'>loading...</div> 
						: 
					<>
						{!showList &&  
							<h3 className='prompt'>Click above to begin</h3>
						}
						
						{showWelcome && showList && 
							<WelcomeBox 
								onWelcomeClose={closeWelcome}
							/>
						}

						{showList && 
							<PlanetsList 
								data={data}
							/>
						}
						
						{showPlanet && 
							<PlanetBox 
								data={data} 
							/>
						}
					</>
				}	
			</div>
		</div>
	);
}


