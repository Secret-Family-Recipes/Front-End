import React from 'react';

class IngredientInput extends React.Component {
  state = {
    input: ''
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    const { input } = this.state;
    const { removeIngredient, ingredient } = this.props;
    return (
      <div>
        <input
          type='text'
          className='ingredient'
          placeholder='New Ingredient'
          value={input || ingredient}
          onChange={this.handleChange}
        />
        <button onClick={removeIngredient}>-</button>
      </div>
    );
  }
}

export default IngredientInput;
