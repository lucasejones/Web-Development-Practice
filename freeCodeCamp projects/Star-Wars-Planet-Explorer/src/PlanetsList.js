export default function PlanetsList({ data }) {

	function handleClick(e) {
		e.preventDefault()
		// TODO: trigger the data of the selected planet to be shown inside the PlanetBox omponent
	}

	const items = []
	data.map((i) => {
		if (i.name === 'Yavin IV') {
			i.name = 'Yavin-IV'
		}

		items.push(
			<div key={i.name}>
				<a 
					href='.planet-box'
					onClick={handleClick}
				>
					<li className='nav-name'>
						{i.name.toLowerCase()}
					</li>
				</a>
			</div>
		)
	})
	
	return(
		<div className='nav-group'>
			{items}
		</div>
	)
}