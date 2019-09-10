import axios from 'axios';
import api from '../helpers/getAPI';

const Auth = {
  isAuthenticated: false,

  authenticate(redirectToReferrer) {
    axios({
      method: 'post',
      url: `${api}/auth/check-token`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`
      }
    })
      .then(({ data }) => {
        this.isAuthenticated = data.tokenVerified;
        redirectToReferrer();
      })
      .catch(err => {
        console.dir(err);
      });
  },

  signout: function(cb) {
    this.isAuthenticated = false;
    cb();
  }
};

export default Auth;
