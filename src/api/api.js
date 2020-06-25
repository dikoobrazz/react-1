import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ff43f4f4-2391-4ebf-ac39-f9f4496f5945',
  },
})

export const usersAPI = {
  getUsers(currentPageNumber = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPageNumber}&count=${pageSize}`)
      .then((response) => response.data)
  },
}

export const userAuth = {
  getUserData() {
    return instance.get(`auth/me`).then((response) => response)
  },
}

export const userFollow = {
  followUser(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
  },
}
