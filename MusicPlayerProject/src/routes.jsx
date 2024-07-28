import { createBrowserRouter } from "react-router-dom";
import HomeLandingPage from "./Pages/HomeLandingPage";
import DisplayHome from "./Components/Display/DisplayHome";
import LoginPage from "./Pages/LoginPage";
import DisplayAlbum from "./Components/Album/DisplayAlbum";
import SignupPage from "./Pages/SignupPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLandingPage />,
    children: [
      {
        index: true,
        element: <DisplayHome />,
      },
      {
        path: "/album/:id",
        element: <DisplayAlbum />,
      },
    ],
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
export default routes;
