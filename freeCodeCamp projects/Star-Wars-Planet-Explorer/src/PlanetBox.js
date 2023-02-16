import Button from './Button.js';
import FetchedData from './FetchedData.js';
import { useState, useEffect, useRef } from 'react';


export default function PlanetBox({ data }) {
	const [index, setIndex] = useState(0)
	const imageRef = useRef();
	const arrFill = Array.from(Array(data.length - 1)).map((e, i) => i + 1)
	const indexArrRef = useRef(arrFill)

	useEffect(() => {
		console.log('PlanetBox render')

		imageRef.current.animate(
		{
			opacity: [0, 1]
		}, 800)
	})


	function indexFromProxyArr(proxyArr, currentIndex) {
		let newIndex = proxyArr[Math.floor(Math.random() * proxyArr.length)]
		
		if (newIndex === currentIndex) {
			newIndex = indexFromProxyArr(proxyArr, currentIndex)
		}
		proxyArr.splice(proxyArr.indexOf(newIndex), 1)

		return newIndex
	}
	

	function imageImport(r) {
		let images = {}
		r.keys().forEach((item, index) => {
			images[item.replace('./', '').split('.')[0]] = r(item);
		});
		return images
	}
     

	function handleClick() {
		if (indexArrRef.current.length == 0) {
			indexArrRef.current = Array.from(Array(10).keys())
		}

		let newIndex = indexFromProxyArr(indexArrRef.current, index)
		setIndex(newIndex)

		imageRef.current.animate(
			{
				opacity: [1, 0]
			}, 800)
	}

	const allImages = imageImport(require.context('./images/', false))
	const planet = data[index]

	if (planet.name === 'Yavin IV') {
		planet.name = 'Yavin-IV' 
	} 

	// To-Dos:
		// understand the triggering animation in useffect and how that relates to this idea from useEffect reference: If you’re not trying to synchronize with some external system, you probably don’t need an Effect. (links to "you might not need an effect")


	// make a component that allows navigation to a specific planet that essentially is a horizontal list of navigable planet names above the planet box. (1)

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
			<h1 className='planet-title'>{planet.name === 'Yavin-IV' ? 'Yavin-iv' : planet.name}</h1>

			<FetchedData
				currentPlanet={planet}
			/>

			<div id='new-planet'>
				<Button 
					handleClick={handleClick} 
					id='new-planet-text' 
					text='Visit Random Planet'
				/>
			</div>

		</div>
	);
}
