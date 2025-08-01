import { useState } from 'react'

const ArticleForm = ({ onSubmit, initialData = {} }) => {
	const [title, setTitle] = useState(initialData.title || '')
	const [content, setContent] = useState(initialData.content || '')

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit({ title, content })
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4 max-w-xl mx-auto'>
			<div>
				<label className='block mb-1 font-semibold'>Title</label>
				<input
					className='w-full border px-3 py-2 rounded'
					value={title}
					onChange={e => setTitle(e.target.value)}
					required
				/>
			</div>
			<div>
				<label className='block mb-1 font-semibold'>Content</label>
				<textarea
					className='w-full border px-3 py-2 rounded min-h-[200px]'
					value={content}
					onChange={e => setContent(e.target.value)}
					required
				/>
			</div>
			<button
				type='submit'
				className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
			>
				Submit
			</button>
		</form>
	)
}

export default ArticleForm
