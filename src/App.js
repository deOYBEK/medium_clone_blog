import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContexts'
import ArticleDetail from './pages/ArticleDetail'
import Home from './pages/Home'
import Login from './pages/Login'
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
				</Routes>
			</AuthProvider>
		</Router>
	)
}

export default App
