// import axios from 'axios';

// export function request(config) {
//   let req = axios.create({
//     baseURL: 'http://123.207.32.32:8000/',
//     timeout: 5000
//   });
//   // req.interceptors.response.use(
//   //   res => {
//   //     return res.data;
//   //   },
//   //   err => {}
//   // );
//   return req(config);
// }
import axios from 'axios';

export default config => {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/',
    timeout: 5000
  });
  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return err;
    }
  );
  // 相应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      return err;
    }
  );
  return instance(config);
};
