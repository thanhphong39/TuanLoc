import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Services } from "./pages/Services";
import { News } from "./pages/News";
import { NewsDetails } from "./pages/NewsDetails";
import { Contact } from "./pages/Contact";
import { AdminNews } from "./pages/AdminNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetails },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetails },
      { path: "services", Component: Services },
      { path: "news", Component: News },
      { path: "news/:id", Component: NewsDetails },
      { path: "contact", Component: Contact },
    ],
  },
  { path: "/admin/news", Component: AdminNews },
]);

