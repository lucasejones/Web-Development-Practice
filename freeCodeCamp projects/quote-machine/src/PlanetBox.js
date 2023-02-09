import Button from './Button.js';
import { useState, useEffect, useRef} from 'react';


function PlanetBox(props) {
	const initialState = 0;
	const [planet, setPlanet] = useState(props.getRandomPlanet(props.data))
	const imageRef = useRef();


	useEffect(() => {
		console.log('child render')
		imageRef.current.animate(
		{
			opacity: [0, 1]
		}, 800)
	}, [planet])


	// console.log('planet', planet)
	if (planet.name === 'Yavin IV') {
		planet.name = 'Yavin-IV' 
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
		setPlanet(props.getRandomPlanet())
		imageRef.current.animate(
			{
				opacity: [1, 0]
			}, 800)
	}


	const allImages = imageImport(require.context('./images/', false))
	const [propertiesArr, valuesArr] = getPropertiesAndValues(planet)

	
	// To-Dos:
	// assign some slight and themed bg color swap depending on planet (2)
	// fix all the unstructured css names (4)
	// prevent the current planet from loading again (1)
	// allow visit to any specific planet with the little bottom dots? (3)



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
