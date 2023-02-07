import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppContainer } from "./App.styled";
import { Home } from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />} />)
  );

  return (
    <AppContainer className="App">
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;
