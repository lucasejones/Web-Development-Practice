import Button from './Button.js';
import { useState, useEffect, useRef} from 'react';


function PlanetBox(props) {
	const initialState = 0;
	const [count, setCount] = useState(initialState);
	const imageRef = useRef();

	// function here


	useEffect(() => {
		if (count != initialState) {
			console.log('child render')
			imageRef.current.animate(
			{
				opacity: [0, 1]
			}, 800)
		}
	}, [count])


	function handleClick() {
		setCount(prevCount => prevCount + 1)
		imageRef.current.animate(
			{
				opacity: [1, 0]
			}, 800)

		console.log('count:', count, 'image', imageRef.current)
	}

	 
	if (!props.data) {
		return <div className='loading'>loading...</div>
	}
  	
	const dataResults = props.data.results
	// console.log(dataResults)

	// obtaining a random item
	var item = dataResults[Math.floor(Math.random() * dataResults.length)];
	console.log(item)


	// preparing the arrays that will be displayed
	var keys = []
	var values = []
	Object.keys(item).slice(0, -5).map((key, index) => {
		keys.push(key);
		values.push(item[key])
	})

	for (let i = 0; i < keys.length; i++) {
		keys[i] = keys[i].replace(/_/g, ' ');
	}

	// console.log('keys', keys)
	// console.log('vals', values)




	// creating a custom context using require.context
	// reference here: https://webpack.js.org/guides/dependency-management/#require-context

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

	// console.log('oiweklrn', allImages[item.name])
	// imageRef = allImages[item.name]

	// console.log('all images', allImages)
	// console.log('item name', item.name)
	// console.log('correct!', allImages[item.name])
    // console.log('yavin?', allImages['Yavin-IV'])

	// the space in Yavin IV was causing strange behavior in which the image was correctly indexed from the allImages object, but was not displaying, despite all the other data doing so. Modifying the image filename to swap the space for a hyphen and changing the fetched item name resolves the issue, though surely there's a more robust approach with larger datasets.


	// To-Dos:
	// break up this big component? (4)
	// assign some slight and themed bg color swap depending on planet (2)
	// fix all the unstructured css names (5)
	// prevent the current planet from loading again (1)
	// allow visit to any specific planet with the little bottom dots? (3)
	// create fade animation when switching planet images
	// make sure you can't switch count for the planet swap as the state change


	return(
		<div id='planet-box'
			ref={imageRef}
			style={{
				background: 'radial-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 90%)',
				backgroundImage: 'url('+allImages[item.name]+')',
				backgroundSize: 'cover'
			}}
		> 	
			<h1 id='planet-title'>{item.name === 'Yavin-IV' ? 'Yavin iv' : item.name}</h1>

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

		</div>
	);
}

export default PlanetBox;
