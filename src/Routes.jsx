import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";

const ProjectRoutes = () => {
  let element = useRoutes([
  
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
