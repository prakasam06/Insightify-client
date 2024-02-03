import { useEffect } from "react";
import { Button, CardBody, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { dashboardAnalytics } from "../api/analytics";
import { useState } from "react";

const DashboardStats = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    (async () => {
      setAnalytics(await dashboardAnalytics());
    })();
  }, []);

  return (
    <Container className="d-flex gap-5 justify-content-center">
      {analytics.map((item) => (
        <Card key={item.title} style={{ width: "18rem" }}>
          <CardBody className="d-flex flex-column align-items-center gap-2">
            <h4>{item.count}</h4>
            <span>{item.title}</span>
            <Link to={`/${item.title.toLowerCase()}/create`}>
              <Button>Create {item.title}</Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default DashboardStats;
