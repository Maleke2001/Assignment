
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from "./App";
import "./index.css"
import SurveyResults from "./page/surveyResults/SurveyResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "/results",
    element: (
      <SurveyResults/>
    ),
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);