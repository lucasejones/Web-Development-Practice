function Header({ onClick }) {
	return(
		<div className='header-container'>
			<h1 className='app-title'>26Pl6a63n63e63t6363 E63x63p63l3o3r3er85 </h1>
			<h1 className='app-title-small-screen'>2Pla3n3et5 6E6x6p6lorer8 </h1>
			<h2 
				className='rebel-symbol'
				onClick={onClick}
			>
					$
			</h2>
		</div>
	)
}

export default Header;