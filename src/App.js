import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import Error from './components/Error';
import Main from './Layout/Main';
import {About} from './components/About';
import Books from './components/Books';
import BookDetails from './components/BookDetails';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/books',
          element:<Books></Books>,
          loader:()=>fetch("https://api.itbook.store/1.0/new"),
        },
        {
          path:'/bookDetails/:id',
          element:<BookDetails></BookDetails>,
          loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
