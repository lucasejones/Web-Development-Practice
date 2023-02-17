import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import PlanetsList from './PlanetsList.js'
import { useState, useEffect} from 'react';

export default function App() {
	const [data, setData] = useState(null);
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


	return (
		<div className='App'>
			<Header />
			<div className='content-container'>
				{
					!data ? 
						<div className='loading'>loading...</div> 
						: 
					<>
						<PlanetsList data={data}/>
						<PlanetBox data={data} />
					</>
				}	
			</div>
		</div>
	);
}


