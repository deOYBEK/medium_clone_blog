import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'

const EditPost = () => {
	const { id } = useParams()
	const [form, setForm] = useState({ title: '', description: '', content: '' })
	const navigate = useNavigate()

	useEffect(() => {
		API.get(`posts/${id}/`).then(res => setForm(res.data))
	}, [id])

	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value })
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await API.put(`posts/${id}/update/`, form)
			navigate(`/posts/${id}`)
		} catch (err) {
			alert('Tahrirlashda xatolik')
		}
	}

	return (
		<div className='p-4 max-w-2xl mx-auto'>
			<h1 className='text-xl font-bold mb-4'>Maqolani tahrirlash</h1>
			<form onSubmit={handleSubmit}>
				<input
					name='title'
					value={form.title}
					onChange={handleChange}
					className='mb-2 w-full p-2 border'
					required
				/>
				<input
					name='description'
					value={form.description}
					onChange={handleChange}
					className='mb-2 w-full p-2 border'
					required
				/>
				<textarea
					name='content'
					value={form.content}
					onChange={handleChange}
					rows='10'
					className='mb-2 w-full p-2 border'
					required
				></textarea>
				<button type='submit' className='bg-green-500 text-white px-4 py-2'>
					Saqlash
				</button>
			</form>
		</div>
	)
}

export default EditPost
