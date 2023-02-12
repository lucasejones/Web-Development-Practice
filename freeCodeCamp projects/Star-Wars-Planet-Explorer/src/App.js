import './App.css';
import Header from './Header.js'
import PlanetBox from './PlanetBox.js';
import { useState, useEffect} from 'react';

function App() {
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
					<PlanetBox data={data} />
				}	
			</div>
		</div>
	);
}

export default App;


