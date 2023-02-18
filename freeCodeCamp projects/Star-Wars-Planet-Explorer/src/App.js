import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import PlanetsList from './PlanetsList.js'
import WelcomeBox from './WelcomeBox.js'
import { useState, useEffect} from 'react';

export default function App() {
	const [data, setData] = useState(null);
	const [startScreen, setStartScreen] = useState(true)
	const [showWelcome, setShowWelcome] = useState(false)
	const [showList, setShowList] = useState(false)
	const [showPlanet, setShowPlanet] = useState(false)

	useEffect(() => {
		console.log('initial render')

		async function fetchData() {
			const url = 'https://swapi.dev/api/planets/'
			const res = await fetch(url);
			var data = await res.json()
			
			setData(data.results)
			
		}

		fetchData();
	}, [])


	function enterApp() {
		setStartScreen(false)
		setShowWelcome(true)
		setShowList(true)
		setShowPlanet(true)
	}


	function closeWelcome() {
		setShowWelcome(false);
	}


	return (
		<div className='App'>
			<Header 
				onEnterApp={enterApp}
				isClickable={!showWelcome}
			/>
			<div className='content-container'>
				{
					!data ? 
						<div className='loading'>loading...</div> 
						: 
					<>

						{startScreen && 
							<h3 className='prompt'>Click above to begin</h3>
						}


						{showWelcome && 
							<WelcomeBox onCloseWelcome={closeWelcome} />
						}

						{showList && 
							<PlanetsList data={data} />
						}

						{showPlanet &&
							<PlanetBox data={data} />
						}


					</>
				}	
			</div>
		</div>
	);
}
