import axios from '../../services/api';

const authProvider = {
  login: ({ username, password }) => axios.post('admin/users/login', { username, password })
    .then((response) => {
      console.log(response);
      localStorage.setItem('auth', JSON.stringify(response.data));
    })
    .catch((err) => {
      throw new Error(err.response.data.error);
    }),
  checkError: (error) => {
    const { status } = error;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => (localStorage.getItem('auth')
    ? Promise.resolve()
    : Promise.reject()),
  logout: () => {
    const token = localStorage.getItem('auth');
    if (!token) return Promise.resolve();

    return axios.post('admin/users/logout', {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => localStorage.removeItem('auth'))
      .catch((err) => {
        throw new Error(err.response.data.error);
      });
  },
  getIdentity: () => Promise.resolve(),
  // authorization
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
