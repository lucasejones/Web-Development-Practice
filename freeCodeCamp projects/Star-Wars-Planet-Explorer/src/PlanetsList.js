// import Naboo from './images/Naboo.jpg'

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
		)
	})
	
	return(
		// <div className='nav'>
		<div className='nav-group'>
			{items}
		</div>
			/*<div className='nav-image-box'>
				<img src={Naboo} alt='Naboo' className='nav-image'/>
			</div>*/
		// </div>
	)
}