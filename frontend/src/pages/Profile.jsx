import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../services/api'

const Profile = () => {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		API.get('articles/my/')
			.then(res => setArticles(res.data))
			.catch(err => console.error(err))
	}, [])

	const handleDelete = slug => {
		if (window.confirm('Are you sure you want to delete this article?')) {
			API.delete(`articles/${slug}/`)
				.then(() =>
					setArticles(articles.filter(article => article.slug !== slug))
				)
				.catch(err => console.error(err))
		}
	}

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>My Articles</h2>
			<ul className='space-y-4'>
				{articles.map(article => (
					<li key={article.slug} className='border p-4 rounded shadow'>
						<h3 className='text-xl font-semibold'>{article.title}</h3>
						<div className='flex space-x-2 mt-2'>
							<Link to={`/edit/${article.slug}`} className='text-blue-500'>
								Edit
							</Link>
							<button
								onClick={() => handleDelete(article.slug)}
								className='text-red-500'
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Profile
