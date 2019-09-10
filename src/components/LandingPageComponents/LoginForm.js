import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, ButtonContainer } from './StyledComponents/Form_Styles';
import Auth from '../../auth/Auth';
import axios from 'axios';
import api from '../../helpers/getAPI';

class LoginForm extends React.Component {
  state = {
    form: {
      email: 'dave@gmail.com',
      password: 'password'
    },
    redirectToReferrer: false
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  login = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${api}/auth/login`, this.state.form);

      localStorage.setItem('token', `bearer ${data.token}`);

      Auth.authenticate(() => {
        this.setState({
          redirectToReferrer: true
        });
      });
    } catch (err) {
      console.dir(err.response.data);
    }
  };

  render() {
    const { form, redirectToReferrer } = this.state;
    const { displayHome } = this.props;
    console.log('redirect', redirectToReferrer);
    if (redirectToReferrer) {
      return <Redirect to='/home' />;
    }

    return (
      <Form onSubmit={this.login}>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={form.email}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={form.password}
          onChange={this.handleChange}
        />
        <ButtonContainer>
          <button type='button' onClick={displayHome}>
            Go Back
          </button>
          <button type='submit'>Login</button>
        </ButtonContainer>
      </Form>
    );
  }
}

export default LoginForm;
