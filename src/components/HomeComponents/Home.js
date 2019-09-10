import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, LeftPage, RightPage } from './StyledComponents/Home_Styles';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import getJWT from '../../helpers/getJWT';
import api from '../../helpers/getAPI';

class Home extends React.Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    const token = getJWT().split(' ')[1];
    const userID = jwtDecode(token).userID;

    axios({
      method: 'get',
      url: `${api}/users/${userID}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: getJWT()
      }
    })
      .then(({ data }) => {
        this.setState({ user: data.user });
      })
      .catch(err => {
        console.dir(err.response.data);
      });
  };

  render() {
    const { user } = this.state;

    if (!user) {
      return <h2>Loading</h2>;
    }

    return (
      <Container>
        <LeftPage>
          <div>
            <h2>{user.family_name} Family Recipes</h2>
            <nav>
              <NavLink to='/table-of-contents'>
                <span>View Recipes</span>{' '}
                .......................................................... 1
              </NavLink>
              <NavLink to='/new-recipe'>
                <span>Create New Recipe</span>{' '}
                ......................................... 2
              </NavLink>
              <NavLink to='/settings'>
                <span>Account Settings</span>{' '}
                ................................................... 3
              </NavLink>
              <NavLink to='/about'>
                <span>About</span>{' '}
                ........................................................................
                4
              </NavLink>
              <NavLink to=''>
                <span>Logout</span>{' '}
                ..........................................................................
                5
              </NavLink>
            </nav>
          </div>
        </LeftPage>
        <RightPage>
          <div></div>
        </RightPage>
      </Container>
    );
  }
}

export default Home;
