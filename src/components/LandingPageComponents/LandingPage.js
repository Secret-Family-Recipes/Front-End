import React from 'react';
import FontPicker from 'font-picker-react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import {
  Container,
  HeaderContainer,
  FormContainer,
  ButtonContainer
} from './StyledComponents/LandingPage_Styles';

class LandingPage extends React.Component {
  state = {
    displayLogin: false,
    displayRegister: false,
    displayHome: true,
    activeFontFamily: 'Tangerine'
  };

  displayLoginForm = () => {
    this.setState({
      displayLogin: true,
      displayRegister: false,
      displayHome: false
    });
  };

  displayRegisterForm = () => {
    this.setState({
      displayLogin: false,
      displayRegister: true,
      displayHome: false
    });
  };

  displayHome = () => {
    this.setState({
      displayLogin: false,
      displayRegister: false,
      displayHome: true
    });
  };

  render() {
    const { displayRegister, displayLogin, displayHome } = this.state;
    const { history } = this.props;
    return (
      <Container>
        <HeaderContainer>
          <h1 className='apply-font'>Secret Family Recipes</h1>
          <FontPicker
            apiKey='AIzaSyAE01dI-NQFkOgud9ND9CRiQiKmsB4J_q0'
            activeFontFamily={this.state.activeFontFamily}
            categories='handwriting'
            scripts={['latin']}
            onChange={nextFont =>
              this.setState({
                activeFontFamily: nextFont.family
              })
            }
            style={{
              backgroundColor: 'transparent'
            }}
          />
        </HeaderContainer>
        <FormContainer>
          {displayHome && (
            <ButtonContainer>
              <button onClick={this.displayLoginForm}>Login</button>
              <button onClick={this.displayRegisterForm}>Register</button>
            </ButtonContainer>
          )}
          {displayRegister && (
            <RegisterForm displayHome={this.displayHome} history={history} />
          )}
          {displayLogin && (
            <LoginForm displayHome={this.displayHome} history={history} />
          )}
        </FormContainer>
      </Container>
    );
  }
}

export default LandingPage;
