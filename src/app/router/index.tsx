import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./route-config";

export function AppRouterProvider() {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
