export default function FetchedData({ currentPlanet }) {

	function getKeysAndValues(planetObject) {
		var keys = []
		var values = []
		Object.keys(planetObject).slice(0, -5).map((key, index) => {
			keys.push(key);
			values.push(planetObject[key])
		})

		for (let i = 0; i < keys.length; i++) {
			keys[i] = keys[i].replace(/_/g, ' ');
		}
		return [keys, values]
	}
	
	const keysArr = getKeysAndValues(currentPlanet)[0]
	const valuesArr = getKeysAndValues(currentPlanet)[1]

	let keys = []
	keysArr.map(i => {
		keys.push(
			<li className='fetched-item' key={i}>{i}:</li>
		)
	})

	let values = []
	valuesArr.map(i => {
		values.push(
			<li className='fetched-item' key={i}>{i}</li>
		)
	})


	return(
		<div className='fetched'>
			<div className='fetched-keys'>
				{keys}
			</div>
			<div className='fetched-values'>
				{values}
			</div>
		</div>
	)
}