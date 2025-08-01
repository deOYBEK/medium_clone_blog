import { useState } from 'react'
import { useAuth } from '../contexts/AuthContexts'

const Register = () => {
	const { registerUser } = useAuth()
	const [form, setForm] = useState({ username: '', email: '', password: '' })

	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value })
	const handleSubmit = e => {
		e.preventDefault()
		registerUser(form)
	}

	return (
		<div className='p-4 max-w-md mx-auto'>
			<h1 className='text-xl font-bold mb-4'>Ro‘yxatdan o‘tish</h1>
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
					name='email'
					type='email'
					placeholder='Email'
					onChange={handleChange}
					required
					className='mb-2 w-full border p-2'
				/>
				<input
					name='password'
					type='password'
					placeholder='Parol'
					onChange={handleChange}
					required
					className='mb-2 w-full border p-2'
				/>
				<button type='submit' className='bg-green-600 text-white px-4 py-2'>
					Ro‘yxatdan o‘tish
				</button>
			</form>
		</div>
	)
}

export default Register
