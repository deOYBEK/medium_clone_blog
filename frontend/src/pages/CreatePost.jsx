import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'

const CreatePost = () => {
	const [form, setForm] = useState({ title: '', description: '', content: '' })
	const navigate = useNavigate()

	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value })
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await API.post('posts/create/', form)
			navigate('/')
		} catch (err) {
			alert('Xatolik: maqola yaratilmagan')
		}
	}

	return (
		<div className='p-4 max-w-2xl mx-auto'>
			<h1 className='text-xl font-bold mb-4'>Yangi maqola</h1>
			<form onSubmit={handleSubmit}>
				<input
					name='title'
					placeholder='Sarlavha'
					onChange={handleChange}
					className='mb-2 w-full p-2 border'
					required
				/>
				<input
					name='description'
					placeholder='Qisqacha tavsif'
					onChange={handleChange}
					className='mb-2 w-full p-2 border'
					required
				/>
				<textarea
					name='content'
					placeholder='To‘liq matn'
					rows='10'
					onChange={handleChange}
					className='mb-2 w-full p-2 border'
					required
				></textarea>
				<button type='submit' className='bg-blue-500 text-white px-4 py-2'>
					Yaratish
				</button>
			</form>
		</div>
	)
}

export default CreatePost
