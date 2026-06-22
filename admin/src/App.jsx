import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

// Check token mỗi lần render — đồng bộ với DevTools
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            localStorage.getItem("token")
              ? <Navigate to="/" replace />
              : <Login onLogin={() => window.location.replace("/")} />
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contacts" element={<Contacts />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
