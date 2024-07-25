import { useState } from "react";
import HomeLandingPage from "./Pages/HomeLandingPage";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      {/* <HomeLandingPage /> */}
    </div>
  );
}

export default App;
