import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleForm from '../components/ArticleForm'
import API from '../services/api'

const EditArticle = () => {
	const { slug } = useParams()
	const navigate = useNavigate()
	const [initialData, setInitialData] = useState(null)

	useEffect(() => {
		API.get(`articles/${slug}/`)
			.then(res => setInitialData(res.data))
			.catch(err => console.error(err))
	}, [slug])

	const handleUpdate = data => {
		API.put(`articles/${slug}/`, data)
			.then(res => {
				navigate(`/articles/${slug}`)
			})
			.catch(err => console.error(err))
	}

	if (!initialData) return <div className='p-4'>Loading...</div>

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>Edit Article</h2>
			<ArticleForm initialData={initialData} onSubmit={handleUpdate} />
		</div>
	)
}

export default EditArticle
