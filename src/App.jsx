import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
          loader: landingLoader,
        },
        {
          path: 'cocktail/:id',
          loader: singleCocktailLoader,
          errorElement: <SinglePageError />,
          element: <Cocktail />,
        },
        {
          path: 'newsletter',
          element: <Newsletter />,
          action: newsletterAction,
          errorElement: <SinglePageError />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
export default App
