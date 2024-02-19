import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Job from "./pages/Job";
import RoutingError from "./pages/RoutingError";

import { loader as jobsLoader } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RoutingError />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: jobsLoader,
      },
      {
        path: "job/:id",
        element: <Job />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
