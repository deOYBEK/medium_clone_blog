import { useNavigate } from 'react-router-dom'
import ArticleForm from '../components/ArticleForm'
import API from '../services/api'

const CreateArticle = () => {
	const navigate = useNavigate()

	const handleCreate = data => {
		API.post('articles/', data)
			.then(res => {
				navigate(`/articles/${res.data.slug}`)
			})
			.catch(err => console.error(err))
	}

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>Create Article</h2>
			<ArticleForm onSubmit={handleCreate} />
		</div>
	)
}

export default CreateArticle
