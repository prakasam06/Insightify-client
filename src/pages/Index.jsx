import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="d-flex justify-content-around px-5 py-2 bg-light">
        <h3 className="text-center">Insightify</h3>
        <div className="d-flex">
          <Link className="px-2" to="/signin">
            <Button>Sign In</Button>
          </Link>
          <Link className="px-2" to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
      <Container>
        <div
          className="d-flex flex-column text-center justify-content-around align-items-center  my-5 p-5 rounded-3"
          style={{ height: "50vh" }}
        >
          <h1>Insightify</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            debitis porro iste iusto amet maxime rem nostrum deserunt illum
            earum?
          </p>
          <Button className="w-50">Get Started</Button>
        </div>
      </Container>
    </>
  );
};

export default Index;
