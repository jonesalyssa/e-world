// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGetAllSwagQuery } from "./swagSlice";
// import "/src/index.css";
// import Footer from "/src/components/Footer";

// export default function WomensShirts() {
//   const { data, isSuccess, isLoading, error } = useGetAllSwagQuery();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const seeProductDetails = (id) => {
//     navigate(`/products/${id}`);
//   };

//   useEffect(() => {
//     if (isSuccess && data) {
//       const womensShirts = data.filter(
//         (item) => item.category === "womens/shirts"
//       );
//       setFilteredProducts(womensShirts);
//     }
//   }, [data, isSuccess]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const filtered = filteredProducts.filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   if (isLoading) return <h3>Loading Womens Shirts...</h3>;
//   if (error) return <h3>Error loading data!</h3>;

//   return (
//     <article>
//       <h1>Womens Shirts</h1>
//       <hr className="divider" />
//       <div className="search">
//         <form className="search" onSubmit={handleSearch}>
//           <label>
//             <input
//               type="text"
//               name="Product"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search Women's Shirts..."
//             />
//           </label>
//           <button className="search-button" type="submit">
//             Search
//           </button>
//         </form>
//       </div>

//       <ul className="all-container">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((p) => (
//             <li key={p.id} className="view-all">
//               <figure className="all-figure">
//                 <img className="products-image" src={p.image} alt={p.title} />
//               </figure>
//               <div className="product-description">
//                 <h3>
//                   <strong>{p.title}</strong>
//                 </h3>
//                 <h3>${p.price}</h3>
//                 <button
//                   type="button"
//                   className="see-details"
//                   onClick={() => seeProductDetails(p.id)}
//                 >
//                   See Details
//                 </button>
//               </div>
//             </li>
//           ))
//         ) : (
//           <h3>No Women's Shirts Available</h3>
//         )}
//       </ul>
//       <Footer />
//     </article>
//   );
// }
