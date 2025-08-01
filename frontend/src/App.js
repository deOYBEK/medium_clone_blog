import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContexts'
import AllPosts from './pages/AllPosts'
import ArticleDetail from './pages/ArticleDetail'
import CreateArticle from './pages/CreateArticle'
import CreatePost from './pages/CreatePost'
import EditArticle from './pages/EditArticle'
import EditPost from './pages/EditPost'
import Home from './pages/Home'
import Login from './pages/Login'
import PostDetail from './pages/PostDetail'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login/' element={<Login />} />
					<Route path='/register/' element={<Register />} />
					<Route path='/profile/' element={<Profile />} />
					<Route path='/article/:slug/' element={<ArticleDetail />} />

					<Route
						path='/profile/'
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>

					<Route path='/create' element={<CreateArticle />} />
					<Route path='/edit/:slug' element={<EditArticle />} />

					<Route path='/' element={<AllPosts />} />
					<Route path='/posts/:id' element={<PostDetail />} />
					<Route
						path='/posts/:id/edit'
						element={
							<ProtectedRoute>
								<EditPost />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/create/'
						element={
							<ProtectedRoute>
								<CreatePost />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthProvider>
		</Router>
	)
}

export default App
