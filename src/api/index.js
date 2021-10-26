import axios from 'axios'
const API = axios.create({baseURL:"http://localhost:5000"})
API.interceptors.request.use((req)=>{
if(localStorage.getItem('profile')){
  req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
}
return req;
})

export const fetchPosts =()=> API.get('/tasks')
export const createpost=(newPost)=>API.post('/tasks',newPost)
export const updatepost=(id,updatedpost)=>API.patch(`/tasks/${id}`,updatedpost)
export const deletepost=(id)=>API.delete(`/tasks/${id}`)
export const likepost=(id)=>API.patch(`/tasks/${id}/likepost`)
export const signIn =(formData)=>API.post('/user/signin',formData)
export const signUp =(formData)=>API.post('/user/signup',formData)