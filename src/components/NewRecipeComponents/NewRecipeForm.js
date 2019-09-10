import React from 'react';
import {
  Container,
  LeftPage,
  RightPage
} from './StyledComponents/NewRecipeForm_Styles';
import IngredientInput from './IngredientInput';

class NewRecipeForm extends React.Component {
  state = {
    form: {
      title: '',
      author: '',
      image: null,
      newIngredient: {
        quantity: null,
        measurement: null,
        name: null,
        preparation: ''
      },
      ingredients: []
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleUpload = e => {
    this.setState({
      ...this.state.form,
      image: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  addIngredient = e => {
    const { newIngredient } = this.state.form;
    if (newIngredient) {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          ingredients: [...prevState.form.ingredients, newIngredient],
          newIngredient: ''
        }
      }));
    } else {
      this.setState({
        error: 'An ingredient is required.'
      });
    }
  };

  removeIngredient = i => {
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        ingredients: prevState.form.ingredients.filter((_, j) => j !== i)
      }
    }));
  };

  render() {
    const { form } = this.state;
    return (
      <Container>
        <LeftPage>
          <form onSubmit={this.handleSubmit}>
            <h2>New Recipe</h2>
            <input
              className='title'
              type='text'
              name='title'
              placeholder='Recipe Title'
              value={form.title}
              onChange={this.handleChange}
            />
            <input
              className='author'
              type='text'
              name='author'
              placeholder='Recipe Author'
              value={form.author}
              onChange={this.handleChange}
            />
            {/* <input
              className='image'
              type='file'
              name='image'
              onChange={this.handleUpload}
            /> */}
            <h4>Ingredients:</h4>
            {form.ingredients.map((ingredient, i) => (
              <IngredientInput
                key={i}
                removeIngredient={() => this.removeIngredient(i)}
                ingredient={ingredient}
              />
            ))}
            <div>
              <input
                type='number'
                placeholder='Qty'
                name='quantity'
                value={form.newIngredient.quantity}
                onChange={this.handleChange}
              />
              <input
                type='text'
                placeholder='New Ingredient'
                name='newIngredient'
                value={form.newIngredient}
                onChange={this.handleChange}
              />
              <button onClick={this.addIngredient}>+</button>
            </div>
          </form>
        </LeftPage>
        <RightPage>
          <div></div>
        </RightPage>
      </Container>
    );
  }
}

export default NewRecipeForm;
