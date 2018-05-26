import React from 'react'
import FruitContext from './context'
import FruitCard from './FruitCard'

const FruitCards = (props) => {
  const { Consumer } = FruitContext

  return(
    <div>
      <Consumer>
        { ({ apples, addFruit, removeFruit }) => (
            <FruitCard 
              name="apples" 
              quantity={apples} 
              addFruit={addFruit} 
              removeFruit={removeFruit}
            /> 
          )
        }
      </Consumer>
      <Consumer>
        { ({ oranges, addFruit, removeFruit }) => ( 
            <FruitCard 
              name="oranges" 
              quantity={oranges} 
              addFruit={addFruit} 
              removeFruit={removeFruit}
            /> 
          )
        }
      </Consumer>
    </div>
  )
}

export default FruitCards
