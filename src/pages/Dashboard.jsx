import { Button, Container, Table } from "react-bootstrap";
import DashboardStats from "../components/DashboardStats";
import { useEffect } from "react";
import { userRecents } from "../api/analytics";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deletePoll } from "../api/polls";
import { deleteForm } from "../api/forms";

const Dashboard = () => {
  const [recents, setRecents] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await userRecents();
      setRecents(data.recents);
    })();
  }, []);

  const handleDelete = async (id, type) => {
    if (type == "forms") {
      await deleteForm(id);
      setRecents((prev) => prev.filter((item) => item._id !== id));
    } else {
      await deletePoll(id);
      setRecents((prev) => prev.filter((item) => item._id !== id));
    }
  };
  return (
    <Container>
      <h3>Dashboard</h3>
      <DashboardStats />

      <div className="py-5">
        <h3>Recents</h3>
        <Table striped hover className="border rounded">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recents.map((item) => (
              <tr key={item._id}>
                <td>{item.question || item.name}</td>
                <td>{item.createdAt}</td>
                <td>{item.formJson ? "Forms" : "Polls"}</td>
                <td className="d-flex gap-2">
                  <Link
                    to={`/${item.formJson ? "forms" : "polls"}/${item._id}`}
                  >
                    <Button>View</Button>
                  </Link>
                  <Button
                    className="bg-danger"
                    onClick={() =>
                      handleDelete(item._id, item.formJson ? "forms" : "polls")
                    }
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Dashboard;
