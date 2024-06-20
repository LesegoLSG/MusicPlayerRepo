import { createBrowserRouter } from "react-router-dom";
import HomeLandingPage from "./Pages/HomeLandingPage";
import DisplayHome from "./Components/Display/DisplayHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLandingPage />,
    children: [
      {
        index: true,
        element: <DisplayHome />,
      },
    ],
  },
]);
export default routes;
