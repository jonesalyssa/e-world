// This is not working

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllSwagQuery } from "./swagSlice";
import {  useNavigate } from "react-router-dom";


export default function Products(setSelectedProductId){
  const {data, isSuccess, isLoading} = useGetAllSwagQuery();
  const [filteredProducts, setFilteredProducts]= useState(null);
  const navigate = useNavigate();

  const seeProductDetails = (id)=>{
    navigate(`/products/${id}`);
  };
  const [searchTerm, setSearchTerm] = useState('');
  const handlesearch =(e) =>{
    e.preventDefault();
    const filtered = data?.data.filter(item=>{
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered);
  }

  if(isLoading){
    return <h3>Loading...</h3>
  }

  return(
    <article>
      <h2>All Swag</h2>
      <div>
        <form onSubmit={handlesearch}>
          <label>
            <input type="text"
            name="Swag"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search Title..." />
          </label>
        </form>
      </div>
      <ul className="swag">
        {filteredProducts ? filteredProducts.map((p) =>(
          <li key = {p.id} className= "swag">
            <h3>
              {p.title} Price {p.price}
            </h3>
            <figure>
              <img src={p.image} alt={p.title}/>
              </figure>
              <button type="button" className="btn btn-info" onClick={() => seeProductDetails(p.id)}> See Details</button>
          </li>
        )
      ):
      data?.data.map((p)=>(
        <li key = {p.id} className="swag">
          <h3>
            {p.title} Price {p.price}
          </h3>
          <figure>
            <img src={p.imnage} alt={p.name} />
          </figure>
          <button type="button" className="btn btn-info" onClick={() => seeProductDetails(p.id)}> See Details</button>

        </li>
      ))
      } 
      </ul>
    </article>
  );
}






// export default function Swag() {
//   const { data, isSuccess, error, isLoading } = useGetAllSwagQuery();
//   const [search, setSearch] = useState("");
//   const swag = Array.isArray(data?.swag) ? data.swag : [];

//   const filteredSwags = swag.filter((swag) =>
//     swag.item.toLowerCase().includes(search.toLowerCase())
//   );

//   if (error) return <p>Error loading.</p>;
//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <article>
//       <h1>Swags</h1>
//       <input
//         type="text"
//         placeholder="Search for an item"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {filteredSwags.length === 0 ? (
//         <p>No swags found.</p>
//       ) : (
//         <div className="grid">
//           {filteredSwags.map((swag) => (
//             <figure key={swag.id} className="swag-item">
//               <Link to={`/swag/${swag.id}`}>View Details</Link>
//             </figure>
//           ))}
//         </div>
//       )}
//     </article>
//   );
// }
