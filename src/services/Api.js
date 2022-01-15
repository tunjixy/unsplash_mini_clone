import axios from 'axios'

export default () => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com/',
  })

  axiosInstance.defaults.headers.common.Authorization =
    'Client-ID e279cbef324727dec47fb6fd1814f60d6280d9690065a5ba719f4ba649b0dfc6'

  return axiosInstance
}
