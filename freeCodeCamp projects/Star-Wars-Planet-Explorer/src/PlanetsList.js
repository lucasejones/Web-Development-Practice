export default function PlanetsList({ data }) {
	console.log(data)

	const items = []
	data.map((i) => {
		if (i.name === 'Yavin IV') {
			i.name = 'Yavin-IV'
		}

		items.push(
			<h4 className='nav-name' key={i.name}>{i.name.toLowerCase()}</h4>
		)
	})
	
	return(
		<div className='nav-group'>
			{items}
			{/*<h1>lhawkleurhlser</h1>*/}
		</div>
	)
}