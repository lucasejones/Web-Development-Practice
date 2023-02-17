export default function PlanetsList({ data }) {
	const items = []
	data.map((i) => {
		if (i.name === 'Yavin IV') {
			i.name = 'Yavin-IV'
		}

		items.push(
			<div key={i.name}>
				<a href='#'>
					<li className='nav-name'>
						{i.name.toLowerCase()}
					</li>
				</a>
			</div>

			// <h4 className='nav-name' key={i.name}>{i.name.toLowerCase()}</h4>
		)
	})
	
	return(
		<div className='nav-group'>
			{items}
		</div>
	)
}