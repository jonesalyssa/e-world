import {  useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../Login/LoginSlice";
// import { setUser } from "./userSlice";


export default function Account() {
  // const [user, setUser] = useState({});
  // const {data, error, isLoading} = useGetUserQuery();
  // const [purchasedSwags, setPurchasedSwags] = useState({});
  const navigate = useNavigate();
  const {data, isSuccess, isLoading, isError, error} = useGetUserQuery();

console.log(useGetUserQuery);

console.log(data);
console.log(isSuccess);
console.log(isLoading);
console.log(isError);



  let $details;
  // No user logged in
  if(!data){
    $details = <p>No user logged in</p>
  }
  // User is logged in but loading data
  else if (isLoading){
    $details = <p>Loading Your Account</p>
  }
  else if (isError){
    $details= <p>error loading your account</p>
  }
  // display account info
  else if (data) {
    $details =(
      <article>
        <ul className="cart">
          <h4>Hello{data.username}, {data.email}</h4>
        </ul>
      </article>
    )
  }
  
  return(
    <aside>
      <h2>My ACCOUNT</h2>
      {$details}
    </aside>
  )
}
//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
//     if (!isAuthenticated) {
//       navigate("/login");
//       return;
//     }

//     const storedEmail = localStorage.getItem("userEmail");
//     const storedName = localStorage.getItem("userName");
//     if (storedEmail && storedName) {
//       setUser({ name: storedName, email: storedEmail });
//     }
// // console.log(storedItems);
// console.log(user);


//     const storedItems =
//       JSON.parse(localStorage.getItem("purchasedItems")) || [];
//     setPurchasedSwags(storedItems);
//   }, []);

//   const handleReturnSwag = (swagIndex) => {
//     const updatedBooks = purchasedSwags.filter(
//       (_, index) => index !== swagIndex
//     );
//     setPurchasedSwags(updatedBooks);
//     localStorage.setItem("purchasedSItems", JSON.stringify(updatedBooks));
//   };

//   if (!user) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <div className="Account-header">
//       <br />
//       <h2>
//         <strong>Account Details</strong>
//       </h2>
//       <div className="Account">
//         <p>
//           <strong>Name:</strong> {user.name}
//         </p>
//         <br />
//         <p>
//           <strong>Email:</strong> {user.email}
//         </p>
//         <br />
//         <h3>
//           <strong>Purchase History:</strong>
//         </h3>
//         {purchasedSwags.length === 0 ? (
//           <p>No purchase history.</p>
//         ) : (
//           purchasedSwags.map((book, index) => (
//             <div key={index}>
//               <p>{/* {book.item}  */}</p>
//               <button onClick={() => handleReturnSwag(index)}>
//                 Return Item
//               </button>
//             </div>
//           ))
//         )}
//         <br />
//         <button
//           className="login-buttons"
//           onClick={() => {
//             localStorage.removeItem("isAuthenticated");
//             navigate("/login");
//           }}
//         >
//           Logout
//         </button>
//         <br />
//       </div>
//     </div>
//   );
// }

//   const {data, isSuccess, isLoading, isError, error} = useGetUserQuery();
// console.log(data);

//   let $details;
//   // No items bought
//   if(!data){
//     $details = <p>No items bought</p>
//   }
//   // Items have been bought but results are not returned yet
//   else if (isLoading){
//     $details = <p>Loading items in Cart</p>
//   }
//   // display list of items bought
//   else{
//     $details =(
//       <article>
//         <ul className="cart">
//           <h4>Hello{data.username}, ({data.email})</h4>
//           {/* <h5>You have {data.length} items in your cart</h5> */}
//           {data.map((p)=>
//           <li key ={p.id} className="cart">
//             <h3>
//               {p.title} & Price: {p.price}
//               {p.description}
//             </h3>
//             <figure>
//               <img src={p.image} alt={p.title} />
//             </figure>
  
//           </li>
//           )}
//         </ul>
//       </article>
//     )
//   }
  
//   return(
//     <aside>
//       <h2>My ACCOUNT</h2>
//       {$details}
//     </aside>
//   )
