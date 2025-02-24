// This is not working

import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetSwagQuery } from "./swagSlice";

export default function Swag() {
  const { data, error, isLoading } = useGetSwagQuery();
  const [search, setSearch] = useState("");
  const swag = Array.isArray(data?.swag) ? data.swag : [];

  const filteredSwags = swag.filter((swag) =>
    swag.item.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p>Error loading.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <article>
      <h1>Library Swags</h1>
      <input
        type="text"
        placeholder="Search for an item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredSwags.length === 0 ? (
        <p>No swags found.</p>
      ) : (
        <div className="grid">
          {filteredSwags.map((swag) => (
            <figure key={swag.id} className="swag-item">
              <Link to={`/swag/${swag.id}`}>View Details</Link>
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
