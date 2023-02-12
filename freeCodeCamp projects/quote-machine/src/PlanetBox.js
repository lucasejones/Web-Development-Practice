import Button from './Button.js';
import { useState, useEffect, useRef } from 'react';

// if I'm reading this right, the child receiving the props is not allowed to change those props within itself. only the parent can change the props.
// maybe by taking care of the refilling logic in the parent component, I can work through this.

// try moving all the logic up to the parent component and see what you can get away with here. I don't think having 1,000 references to props is the right way to be doing things.

//SOLUTION: 
// you shouldn't be trying to change the props values in the child component; focus only on displaying them in the child component. change them in the parent component.
// the stack overflow here is useful:
// https://stackoverflow.com/questions/26089532/why-cant-i-update-props-in-react-js

// don't update the remaning planets with that function because that's essentially trying to change the props. instead just use the getRandom one and generate a fake array made up of 10 indices; map each index to that new array and delete it as each picture is shown. so basically what you were doing before, but with a fake array instead of one from props...?

// If I decide not to do randomization, and instead cycle through the planets in order, each current planet shown corresponding to a highlighted title of the planet above the box, this would be a more straightforward project. 
// Of course, it would still be nice to be able to click on the names OR navigate via the random button...


// identify the different visual states:
	// 1. loading (successful fetch should switch to the !loading state)
	// 2. failed load (unsuccessful fetch should switch to loadFailed=true)
	// 3. show the container box (containerShow all the time if loaded)
	// 4. specific image state: (clicking the random planet button should switch the image state off for the current one, and image state on for the new one
	// 4. 



function PlanetBox({data, ...props}) {
	const [planet, setPlanet] = useState(data[props.index])
	// const [isEmpty, setIsEmpty] = useState(false)
	const imageRef = useRef();



	useEffect(() => {
		console.log('child render')

		imageRef.current.animate(
		{
			opacity: [0, 1]
		}, 800)

	}, [planet])


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
		
		// setPlanet(props.getRandomPlanet(data))
		setPlanet(data[props.getRandomIndex(data.length)])
		console.log('planet', planet)


		imageRef.current.animate(
			{
				opacity: [1, 0]
			}, 800)
	}


	

	// function getRandomPlanetByIndex(remainingPlanets, randomIndex) {
	// 	return remainingPlanets[randomIndex]
	// }

	// const index = props.getRandomIndex(data.length)
	console.log('index', props.index)
	console.log('data[index]', data[props.index])
		

	
	// console.log(props.dynamicArr)

	// console.log('props.data before', props.data)
	// console.log('props.dynamicArr before', props.dynamicArr)

	// props.updateRemainingPlanets(props.data, planet)

	// console.log('props.data after', props.data)
	// console.log('props.dynamicArr after', props.dynamicArr)


	if (planet.name === 'Yavin IV') {
		planet.name = 'Yavin-IV' 
	} 


	// if (props.dynamicArr.length == 0) {
	// 	console.log('empty!')
	// 	props.dynamicArr = props.dynamicArr.concat(props.data)

	// 	// dynamicArr.current.concat(props.data)
	// 	// setPlanet(props.getRandomPlanet(.current))

	// 	console.log('restored remaining planets', props.dynamicArr)
	// }


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
