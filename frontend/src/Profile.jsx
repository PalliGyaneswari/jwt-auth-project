import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      navigate("/");
      return;
    }

    axios
      .get("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        alert("Invalid or expired token");
        localStorage.removeItem("token");
        navigate("/");
      });
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Profile Page</h2>
      {user ? (
        <>
          <p><b>Email:</b> {user.email}</p>
          <p><b>User ID:</b> {user.id}</p>
          <button onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
