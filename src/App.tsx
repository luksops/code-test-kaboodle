import { Navigate } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppContainer } from "./App.styled";
import { AccommodationDetails } from "./pages/AccommodationDetails/AccommodationDetails";
import { Home } from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/code-test-kaboodle" />} />
        <Route path="/code-test-kaboodle" element={<Home />} />
        <Route path="/:accommodationId" element={<AccommodationDetails />} />
      </>
    )
  );

  return (
    <AppContainer className="App">
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;
