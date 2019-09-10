import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, ButtonContainer } from './StyledComponents/Form_Styles';
import Auth from '../../auth/Auth';
import axios from 'axios';
import api from '../../helpers/getAPI';

class RegisterForm extends React.Component {
  state = {
    form: {
      first_name: '',
      last_name: '',
      family_name: '',
      email: '',
      password: ''
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

  register = async e => {
    e.preventDefault();
    const { form } = this.state;

    try {
      const { data } = await axios.post(`${api}/auth/register`, form);

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

    if (redirectToReferrer) {
      return <Redirect to='/home' />;
    }

    return (
      <Form onSubmit={this.register}>
        <input
          type='text'
          name='first_name'
          placeholder='First Name'
          value={form.first_name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='last_name'
          placeholder='Last Name'
          value={form.last_name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='family_name'
          placeholder='Family Name'
          value={form.family_name}
          onChange={this.handleChange}
        />
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
          <button type='submit'>Register</button>
        </ButtonContainer>
      </Form>
    );
  }
}

export default RegisterForm;
