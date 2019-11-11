import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientsList from './IngredientList';
import Search from './Search';

const Ingredients=()=> {
  const [ userIngredients, setUserIngredients ] = useState([])

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients =>[
      ...prevIngredients, {
        id: Math.random().toString(), ...ingredient
      }
    ]);
  };
  
  const removeIngredientHandler = ingredientId =>{
    setUserIngredients(prevIngredients =>
      prevIngredients.filter(ingredients => ingredients.id !== ingredientId))
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient ={addIngredientHandler} />

      <section>
        <Search />
        <IngredientsList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
