import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import API from '../services/api'

const PostDetail = () => {
	const { id } = useParams()
	const [post, setPost] = useState(null)
	const { user } = useAuth()

	useEffect(() => {
		API.get(`posts/${id}/`)
			.then(res => setPost(res.data))
			.catch(err => console.error(err))
	}, [id])

	if (!post) return <p>Yuklanmoqda...</p>

	return (
		<div className='p-4 max-w-3xl mx-auto'>
			<h1 className='text-2xl font-bold'>{post.title}</h1>
			<p className='text-gray-600 mb-4'>By {post.author}</p>
			<p>{post.content}</p>

			{user && user.username === post.author && (
				<Link
					to={`/posts/${post.id}/edit`}
					className='mt-4 block text-green-600'
				>
					Tahrirlash
				</Link>
			)}
		</div>
	)
}

export default PostDetail
