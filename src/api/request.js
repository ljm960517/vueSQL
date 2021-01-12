//aixos配置，请求拦截器
import axios from 'axios'


const http =axios.create({
    baseURL: 'https://book.youbaobao.xyz:18082',
    timeout: 3000
})



//请求拦截
http.interceptors.request.use(config => {
    // if (store.state.auth_info) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        //   config.headers['token'] = `ljm`;
    // }
  return config
},err => {
        // console.log("err",err);
  return Promise.reject(err)
}
)

//响应拦截处理
http.interceptors.response.use(response => {
    return response.data
 },error => {
   if (error && error.response) {
       // console.log("error:"+error);
       responseError(error);
   }
   return Promise.reject(error)
})
  
  export default http