import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      {routes.map((route) =>
        route.private ? (
          <Route
            element={<PrivateRoute>{route.element}</PrivateRoute>}
            path={route.path}
            key={route.title}
          />
        ) : (
          <Route element={route.element} key={route.title} path={route.path} />
        ),
      )}
    </Routes>
  );
}

export default App;
