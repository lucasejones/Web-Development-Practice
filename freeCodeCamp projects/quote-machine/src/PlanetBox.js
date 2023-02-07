import Button from './Button.js';
// import twittericon from './images/twittericon.png';
// import yav from './images/Yavin IV.webp';
// import './Naboo.jpg';
import { useState, useEffect} from 'react';


function PlanetBox() {
	const [data, setData] = useState('');
	const [toggle, setToggle] = useState(false)
	let url = 'https://swapi.dev/api/planets/'

	useEffect(() => {
		const fetchIt = async () => {
		const res = await fetch(url);
		var data = await res.json()

		setData(data)
		}

		fetchIt()
		console.log('re-rendered')
	}, [])


	function handleClick() {
		setToggle(prevState => !prevState)
	}

	 
	if (!data) {
		return <div className='loading'>loading...</div>
	}
  
	const ressies = data.results
	console.log(ressies)
	var item = ressies[Math.floor(Math.random() * ressies.length)];
	console.log(item)

	var keys = []
	var values = []

	Object.keys(item).slice(0, -5).map((key, index) => {
		keys.push(key);
		values.push(item[key])
	})

	for (let i = 0; i < keys.length; i++) {
		keys[i] = keys[i].replace(/_/g, ' ');
	}






	function imageImport(r) {
		let images = {}
		r.keys().forEach((item, index) => {
			images[item.replace('./', '').split('.')[0]] = r(item);
		});
		return images
	}
     
	const allImages = imageImport(require.context('./images/', false))

	if (item.name === 'Yavin IV') {
		item.name = 'Yavin-IV' 
	} 

	// console.log('all images', allImages)
	// console.log('item name', item.name)
	// console.log('correct!', allImages[item.name])
    // console.log('yavin?', allImages['Yavin-IV'])

	// the space in Yavin IV was causing strange behavior in which the image was correctly indexed from the allImages object, but was not displaying, despite all the other data doing so. Modifying the image filename to swap the space for a hyphen and changing the fetched item name resolves the issue, though surely there's a more robust approach with larger datasets.




	// assign some slight and themed bg color swap depending on planet
	// fix all the unstructured css names
	// allow visit to any specific planet with the little bottom dots?

	return(
		// <div id='planet-box'>
		<div id='planet-box'
			style={{
				background: 'radial-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 90%)',
				backgroundImage: 'url('+allImages[item.name]+')',
				backgroundSize: 'cover'
			}}
		> 
			{/*<img className='planet-bg' src={yav} alt={yav}/>*/}
		{/*<img className='planet-bg' src={allImages[item.name]} alt={item.name}/>*/}
		{/*<img className='planet-bg' src={allImages[item.name]} alt={item.name}/>*/}
			<h1 id='planet-title'>{item.name === 'Yavin-IV' ? 'Yavin-iv' : item.name}</h1>

			<div className='fetched'>
				<div className='fetched-keys'>
					{keys.map(i => {
						return(
							<li className='fetched-item' key={i}>{i}:</li>
						)
							
						})

					}
				</div>
				<div className='fetched-values'>
					{values.map(i => {
						return(
							<li className='fetched-item' key={i}>{i}</li>
						)
							
						})

					}
				</div>
			</div>

			<div id='new-planet'>
				<Button handleClick={handleClick} id='new-planet-text' text='Visit New Planet'/>
			</div>

			{/*<a href='#1' id='tweet-quote'>
				<img id='twitter-icon' alt='twitter icon' src={twittericon} />
			</a>*/}
		</div>
	);
}

export default PlanetBox;
