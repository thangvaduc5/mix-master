import { useLoaderData, Navigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'
import axios from 'axios'
import { Link } from 'react-router-dom'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)

  return { id, data }
}

const Cocktail = () => {
  const { id, data } = useLoaderData()
  // if (!data) return <h2>Something went wrong...</h2>

  if (!data) {
    return <Navigate to="/" />
  }

  const singleDrink = data.drinks[0]

  const {
    strDrink: name,
    strDrinkThumb: image,
    strCategory: category,
    strInstructions: instructions,
    strGlass: glass,
    strAlcoholic: info,
  } = singleDrink

  const validIngredients = Object.keys(singleDrink)
    .filter((key) => {
      return key.startsWith('strIngredient') && singleDrink[key] !== null
    })
    .map((item) => {
      return singleDrink[item]
    })
    .join(', ')

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            <span className="ing">{validIngredients}</span>
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail
