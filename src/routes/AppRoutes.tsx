import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import TablePage from "../pages/TablePage/TablePage";
import KanbanBoard from "../pages/KanbanBoard/KanbanBoard";
import FormBuilderPage from "../pages/FormBuilderPage/FormBuilderPage";
import ProductPage from "../pages/ProductPage/ProductPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/kanban" element={<KanbanBoard />} />
      <Route path="/form-builder" element={<FormBuilderPage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
}