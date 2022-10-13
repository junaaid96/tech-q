import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Questions from "./Components/Questions/Questions";
import Statistics from "./Components/Statistics/Statistics";
import Topics from "./Components/Topics/Topics";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/topic",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "/topic/:topicID",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicID}`);
          },
          element: <Questions></Questions>
        }
      ],
    },
    {
      path: "*",
      element: (
        <div>
          <h1>404</h1>
          <h1>Not Found</h1>
          <h4>Apnar Bhul Hoyeche, Khoma Koira Dilam!</h4>
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
