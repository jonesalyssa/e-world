import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [user, setUser] = useState(null);
  const [purchasedSwags, setPurchasedSwags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    if (storedEmail && storedName) {
      setUser({ name: storedName, email: storedEmail });
    }

    const storedBooks =
      JSON.parse(localStorage.getItem("purchasedSwags")) || [];
    setPurchasedSwags(storedBooks);
  }, [navigate]);

  const handleReturnSwag = (swagIndex) => {
    const updatedBooks = purchasedSwags.filter(
      (_, index) => index !== swagIndex
    );
    setPurchasedSwags(updatedBooks);
    localStorage.setItem("purchasedSwags", JSON.stringify(updatedBooks));
  };

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div className="Account-header">
      <br />
      <h2>
        <strong>Account Details</strong>
      </h2>
      <div className="Account">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <br />
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <br />
        <h3>
          <strong>Purchase History:</strong>
        </h3>
        {purchasedSwags.length === 0 ? (
          <p>No purchase history.</p>
        ) : (
          purchasedSwags.map((book, index) => (
            <div key={index}>
              <p>{/* {book.item}  */}</p>
              <button onClick={() => handleReturnSwag(index)}>
                Return Item
              </button>
            </div>
          ))
        )}
        <br />
        <button
          className="login-buttons"
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            navigate("/login");
          }}
        >
          Logout
        </button>
        <br />
      </div>
    </div>
  );
}
