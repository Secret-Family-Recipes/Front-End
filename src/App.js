import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPageComponents/LandingPage';
import Home from './components/HomeComponents/Home';
import NewRecipeForm from './components/NewRecipeComponents/NewRecipeForm';
import ProtectedRoute from './components/AuthenticationComponents/ProtectedRoute';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={LandingPage} />
        <ProtectedRoute path='/home' component={Home} />
        <ProtectedRoute path='/new-recipe' component={NewRecipeForm} />
      </div>
    );
  }
}

export default App;
