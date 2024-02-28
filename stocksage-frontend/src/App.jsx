import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./css/main.css";
import AppLayout from "./ui/AppLayout";
import News from "./pages/News";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import { QueryClient, QueryClientProvider } from "react-query";
import { StockProvider } from "./contexts/StocksContexts";
import Company from "./pages/Company";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";
import Heatmap from "./pages/HeatMap";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/home"></Navigate>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/News",
        element: <News></News>,
      },
      {
        path: "/prediction",
        element: <Prediction></Prediction>,
      },
      {
        path: "/heatmap",
        element: <Heatmap></Heatmap>,
      },
      {
        path: "/company",
        element: <Company></Company>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/logout",
        element: <Login></Login>,
      }
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <StockProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StockProvider>
  );
}

export default App;
