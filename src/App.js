import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Topic from './Components/Topic/Topic';
import Main from './Layout/Main';

function App() {
const router = createBrowserRouter([
  {
    path: '/', 
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: async() => {
         return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topic></Topic>
      }
    ]
  }
]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
