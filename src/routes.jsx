import Index from "./pages/Index";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import { CreateForm } from "./pages/CreateForm";
import CreatePoll from "./pages/CreatePoll";
import ViewForm from "./pages/ViewForm";
import ViewPolls from "./pages/ViewPolls";

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
    path: "/forms/:id",
    title: "View Form",
    private: false,
    element: (
      <Navbar>
        <ViewForm />
      </Navbar>
    ),
  },
  {
    path: "/polls/:id",
    title: "View Polls",
    private: false,
    element: (
      <Navbar>
        <ViewPolls />
      </Navbar>
    ),
  },
  {
    path: "/forms/create",
    title: "Create Form",
    private: false,
    element: (
      <Navbar>
        <CreateForm />
      </Navbar>
    ),
  },
  {
    path: "/polls/create",
    title: "CreatePoll",
    private: false,
    element: (
      <Navbar>
        <CreatePoll />
      </Navbar>
    ),
  },
];

export default routes;
