import http from 'utils/http'
import api from 'config/api.conf'

export const login = (username, password) => http.proxy.post(api.user.login, { params: { username, password } })
export const logout = () => http.proxy.post(api.user.logout)
export const register = ({ username, password, email }) => http.proxy.post(api.user.register, { params: { username, password, email } })
