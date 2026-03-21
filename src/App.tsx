import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import TablePage from "./pages/TablePage/TablePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import KanbanBoard from "./pages/KanbanBoard/KanbanBoard";
import FormBuilderPage from "./pages/FormBuilderPage/FormBuilderPage";

import ProtectedRoute from "./auth/ProtectedRoute";

function App() {

  return (
    <HashRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <ProtectedRoute allowedRoles={["Admin","Manager","User"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/table" element={<TablePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/kanban" element={<KanbanBoard />} />
        <Route path="/form-builder" element={<FormBuilderPage />} />

      </Routes>

    </HashRouter>
  );
}

export default App;