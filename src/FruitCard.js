import React from 'react'

const FruitCard = ({name, quantity, addFruit, removeFruit}) => (
  <div>
    <h1>Fruit: {name}</h1>
    <h2>Quantity: {quantity}</h2>
    <button onClick={() => addFruit(name)}>Add some {name}</button>
    <button onClick={() => removeFruit(name)}>Remove some {name}</button>
  </div>
)

export default FruitCard
