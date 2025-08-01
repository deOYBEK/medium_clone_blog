import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../services/api'

const AllPosts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		API.get('posts/')
			.then(res => setPosts(res.data))
			.catch(err => console.error(err))
	}, [])

	return (
		<div className='p-4'>
			<h1 className='text-xl font-bold mb-4'>Barcha maqolalar</h1>
			{posts.map(post => (
				<div key={post.id} className='mb-4 p-4 border rounded shadow'>
					<h2 className='text-lg font-semibold'>{post.title}</h2>
					<p>{post.description}</p>
					<Link
						to={`/posts/${post.id}`}
						className='text-blue-600 mt-2 inline-block'
					>
						Batafsil
					</Link>
				</div>
			))}
		</div>
	)
}

export default AllPosts
