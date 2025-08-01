import jwt_decode from 'jwt-decode'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() =>
		localStorage.getItem('access_token')
			? jwt_decode(localStorage.getItem('access_token'))
			: null
	)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const loginUser = async credentials => {
		setLoading(true)
		try {
			const res = await API.post('token/', credentials)
			localStorage.setItem('access_token', res.data.access)
			localStorage.setItem('refresh_token', res.data.refresh)
			setUser(jwt_decode(res.data.access))
			navigate('/')
		} catch (err) {
			alert('Login xato: foydalanuvchi yoki parol noto‘g‘ri')
		} finally {
			setLoading(false)
		}
	}

	const registerUser = async formData => {
		try {
			await API.post('users/register/', formData)
			navigate('/login/')
		} catch (err) {
			alert('Ro‘yxatdan o‘tishda xatolik')
		}
	}

	const logoutUser = () => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
		setUser(null)
		navigate('/login/')
	}

	return (
		<AuthContext.Provider
			value={{ user, loginUser, registerUser, logoutUser, loading }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
