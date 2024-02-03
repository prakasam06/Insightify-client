import Index from "./pages/Index";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import { CreateForm } from "./pages/CreateForm";
import CreatePoll from "./pages/CreatePoll";

const routes = [
  {
    path: "/",
    title: "Index Page",
    private: false,
    element: (
      <>
        <Index />
      </>
    ),
  },
  {
    path: "/signin",
    title: "Signin",
    private: false,
    element: <Signin />,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    private: false,
    element: (
      <Navbar>
        <Dashboard />
      </Navbar>
    ),
  },
  {
    path: "/signup",
    title: "Signup",
    private: false,
    element: <Signup />,
  },
  {
    path: "/createForm",
    title: "Create Form",
    private: true,
    element: <CreateForm />,
  },
  {
    path: "/createpoll",
    title: "CreatePoll",
    private: false,
    element: <CreatePoll />,
  },
];

export default routes;
