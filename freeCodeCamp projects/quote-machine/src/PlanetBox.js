import Button from './Button.js';
import { useState, useEffect, useRef } from 'react';


// identify the different visual states:
	// 1. loading (successful fetch should switch to the !loading state)
	// 2. failed load (unsuccessful fetch should switch to loadFailed=true)
	// 3. show the container box (containerShow all the time if loaded)
	// 4. specific image state: (clicking the random planet button should switch the image state off for the current one, and image state on for the new one
	// 4. 



function PlanetBox(props) {
	const [index, setIndex] = useState(0)
	const imageRef = useRef();
	// let indexArr = Array.from(Array(props.data.length).keys())

	useEffect(() => {
		console.log('child render')

		imageRef.current.animate(
		{
			opacity: [0, 1]
		}, 800)

	}, [index])


	function getNewRandomIndex(totalIndices, currentIndex) {
		// recursive function that ensures a unique index is generated 

		let newIndex = Math.floor(Math.random() * (totalIndices - 1))
		if (newIndex === currentIndex) {
			// console.log('current index rerun', currentIndex, 'newIndex rerun', newIndex)
			newIndex = getNewRandomIndex(totalIndices, currentIndex)
		}
		// console.log('current index', currentIndex, 'newIndex', newIndex)
		return newIndex
	}


	function getPropertiesAndValues(planetObject) {
		// preparing the arrays that will be displayed

		var properties = []
		var values = []
		Object.keys(planetObject).slice(0, -5).map((key, index) => {
			properties.push(key);
			values.push(planetObject[key])
		})

		for (let i = 0; i < properties.length; i++) {
			properties[i] = properties[i].replace(/_/g, ' ');
		}
		return [properties, values]
	}

	
	function imageImport(r) {
		// creating a custom context using require.context
		// reference here: https://webpack.js.org/guides/dependency-management/#require-context

		let images = {}
		r.keys().forEach((item, index) => {
			images[item.replace('./', '').split('.')[0]] = r(item);
		});
		return images
	}
     

	function handleClick() {
		let newRandomIndex = getNewRandomIndex(props.data.length, index)
		setIndex(newRandomIndex)

		imageRef.current.animate(
			{
				opacity: [1, 0]
			}, 800)
	}

	// console.log(indexArr)

	let planet = props.data[index]
	console.log(planet)

	if (planet.name === 'Yavin IV') {
		planet.name = 'Yavin-IV' 
	} 

	const [propertiesArr, valuesArr] = getPropertiesAndValues(planet)
	const allImages = imageImport(require.context('./images/', false))


	




	
	// To-Dos:
	// prevent the current planet from loading again (1)

	// make a component that allows navigation to a specific planet that essentially is a horizontal list of navigable planet names above the planet box. (2)

	// assign some slight and themed bg color swap depending on planet (3)
	// check out animation method alternatives (4)

	// try to get that cool gradient overlay to work (5)

	// fix all the unstructured css names (6)
	


	return(
		<div id='planet-box'
			ref={imageRef}
			style={{
				background: 'radial-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 90%)',
				backgroundImage: 'url('+allImages[planet.name]+')',
				backgroundSize: 'cover'
			}}
		> 	
			<h1 id='planet-title'>{planet.name === 'Yavin-IV' ? 'Yavin-iv' : planet.name}</h1>

			<div className='fetched'>
				<div className='fetched-keys'>
					{propertiesArr.map(i => {
						return(
							<li className='fetched-item' key={i}>{i}:</li>
						)
							
						})

					}
				</div>
				<div className='fetched-values'>
					{valuesArr.map(i => {
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
