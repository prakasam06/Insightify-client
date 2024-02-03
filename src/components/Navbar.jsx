import Container from "react-bootstrap/Container";
import { default as BootstrapNav } from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "./../context/JWTAuthContext";

const Navbar = ({ children }) => {
  const { signOut, isAuthenticated } = useAuth();
  return (
    <>
      <BootstrapNav className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <BootstrapNav.Brand href="#home">Insightify</BootstrapNav.Brand>
          <BootstrapNav.Toggle />
          <BootstrapNav.Collapse className="justify-content-end gap-3">
            <BootstrapNav.Text>
              <Link to="/dashboard" className="text-decoration-none">
                Dashboard
              </Link>
            </BootstrapNav.Text>
            {isAuthenticated ? (
              <BootstrapNav.Text>
                <a onClick={() => signOut()} className="text-decoration-none">
                  Sign Out
                </a>
              </BootstrapNav.Text>
            ) : (
              <BootstrapNav.Text>
                <Link to="/signin" className="text-decoration-none">
                  Sign In
                </Link>
              </BootstrapNav.Text>
            )}
          </BootstrapNav.Collapse>
        </Container>
      </BootstrapNav>
      <div className="p-3">{children}</div>
    </>
  );
};

export default Navbar;
