import { useState } from 'react'
import { useAuth } from '../contexts/AuthContexts'

const Login = () => {
	const { loginUser, loading } = useAuth()
	const [form, setForm] = useState({ username: '', password: '' })

	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value })
	const handleSubmit = e => {
		e.preventDefault()
		loginUser(form)
	}

	return (
		<div className='p-4 max-w-md mx-auto'>
			<h1 className='text-xl font-bold mb-4'>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					name='username'
					type='text'
					placeholder='Username'
					onChange={handleChange}
					required
					className='mb-2 w-full border p-2'
				/>
				<input
					name='password'
					type='password'
					placeholder='Password'
					onChange={handleChange}
					required
					className='mb-2 w-full border p-2'
				/>
				<button
					type='submit'
					className='bg-blue-500 text-white px-4 py-2'
					disabled={loading}
				>
					{loading ? 'Kirish...' : 'Login'}
				</button>
			</form>
		</div>
	)
}

export default Login
