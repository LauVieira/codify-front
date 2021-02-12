import axios from '../../services/api';

function str_obj(str) {
  str = str.split(', ');
  const result = {};
  for (let i = 0; i < str.length; i++) {
    const cur = str[i].split('=');
    result[cur[0]] = cur[1];
  }
  return result;
}

const authProvider = {
  login: ({ username, password }) => axios.post('/users/login', { username, password })
    // .then((response) => {
    //   localStorage.setItem('auth', response.data.token);
    // })
    .catch((err) => {
      throw new Error(err.response.data.error);
    }),
  checkError: (error) => {
    const { status } = error;
    if (status === 401 || status === 403) {
    //   localStorage.removeItem('auth');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => {
    const cookies = str_obj(document.cookie);
    console.log(cookies);
    if (true) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  logout: () => {
    const cookies = str_obj(document.cookie);
    if (false) return Promise.resolve();

    return axios.post('/users/logout', {})
      .then(() => {
        const expiration = Date.now();
        document.cookie = `token= ; expires = ${expiration}`;
      })
      .catch((err) => {
        throw new Error(err.response.data.error);
      });
  },
  getIdentity: () => Promise.resolve(),
  // authorization
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
