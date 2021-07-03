import { get, post, customFetch } from './API'

const endpoints = {
  login: '/api/user/login',
  sign_up: '/api/user/sign-up',
  get_user: '/api/user/profile/'
}

export const login = (params) => post(endpoints.login, params, { token_required : false })
export const signUp = (params) => post(endpoints.sign_up, params, { token_required : false })
export const getUser = (params) => get(endpoints.get_user + params)

export const fetchLogin = (params) => {
  return new Promise((resolve, reject) => {
    customFetch(login, params)
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

export const fetchSignUp = (params) => {
  return new Promise((resolve, reject) => {
    customFetch(signUp, params)
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

export const fetchUser = (params) => {
  return new Promise((resolve, reject) => {
    customFetch(getUser, params)
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}
