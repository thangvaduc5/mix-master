import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const cooktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async () => {
  const searchTerm = ''
  const response = await axios.get(`${cooktailSearchUrl}${searchTerm}`)

  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  )
}
export default Landing
