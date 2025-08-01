import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContexts'

const Navbar = () => {
	const { user, logoutUser } = useAuth()

	return (
		<nav className='bg-gray-100 p-4 flex justify-between'>
			<Link to='/' className='font-bold'>
				Blog
			</Link>
			<div>
				{user ? (
					<>
						<span className='mr-4'>{user.username}</span>
						<button onClick={logoutUser} className='text-red-600'>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to='/login/' className='mr-4'>
							Login
						</Link>
						<Link to='/register/'>Register</Link>
					</>
				)}
			</div>
		</nav>
	)
}

export default Navbar
