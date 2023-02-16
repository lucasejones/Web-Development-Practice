import Button from './Button.js';
import { useState, useEffect, useRef } from 'react';


function PlanetBox({ data }) {
	const [index, setIndex] = useState(0)
	const imageRef = useRef();
	const arrFill = Array.from(Array(data.length - 1)).map((e, i) => i + 1)
	const indexArrRef = useRef(arrFill)

	useEffect(() => {
		console.log('child render')

		imageRef.current.animate(
		{
			opacity: [0, 1]
		}, 800)
	})


	function indexFromLessening(indexArr, currentIndex) {
		// returns the index which will be used as the new state on click.

		// there's a recursive block which ensures that no duplicate value can be given when the array is restored from being emptied 
		//ex: (if 4 was the final value to empty out, 4 will not be called first when the array is re-filled.)

		// getting the value from the array of remaining indices
		let newIndex = indexArr[Math.floor(Math.random() * indexArr.length)]
		
		if (newIndex === currentIndex) {
			// console.log('current index rerun', currentIndex, 'newIndex rerun', newIndex)
			newIndex = indexFromLessening(indexArr, currentIndex)
		}
		// console.log('current index', currentIndex, 'newIndex', newIndex)

		// eliminating that value from the array of remaining indices
		indexArr.splice(indexArr.indexOf(newIndex), 1)
		// console.log('newindexinfunc', newIndex, indexArr.indexOf(newIndex))

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
		// let newRandomIndex = getNewRandomIndex(props.data.length, index)
		// setIndex(newRandomIndex)
		if (indexArrRef.current.length == 0) {
			indexArrRef.current = Array.from(Array(10).keys())
		}

		let newran = indexFromLessening(indexArrRef.current, index)
		setIndex(newran)

		imageRef.current.animate(
			{
				opacity: [1, 0]
			}, 800)
	}

	console.log(data)
	console.log(indexArrRef.current)
	console.log('current index', index)

	let planet = data[index]
	// console.log(planet)

	if (planet.name === 'Yavin IV') {
		planet.name = 'Yavin-IV' 
	} 

	const [propertiesArr, valuesArr] = getPropertiesAndValues(planet)
	const allImages = imageImport(require.context('./images/', false))





	
	// To-Dos:

	// understand strict mode running twice in useeffect
		// read 'thinking in react'
		// understand the triggering animation in useffect and how that relates to this idea from useEffect reference: If you’re not trying to synchronize with some external system, you probably don’t need an Effect. (links to "you might not need an effect")


	// make a component that allows navigation to a specific planet that essentially is a horizontal list of navigable planet names above the planet box. (1)

	// get planet underline to be text shadowed too (1.5)
	// check out animation method alternatives (2)

	// assign some slight and themed bg color swap depending on planet (3)

	// fix all the unstructured css names (4)
	


	return(
		<div className='planet-box'
			ref={imageRef}
		> 	
			<img 
				src={allImages[planet.name]} 
				alt={'a depiction of ' + allImages[planet.name]}
			/>
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
