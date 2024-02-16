import { createBrowserRouter, RouterProvider } from "react-router-dom";
import jobsData from "../api/data.json";

import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

// const url = "../api/data.json";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
