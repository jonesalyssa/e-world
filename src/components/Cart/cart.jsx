import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./cartSlice";
import "/src/index.css";
import { useUserCartQuery, useAddToCartMutation, useDeleteFromCartMutation } from "./cartSlice";
import { useGetUserQuery } from "../Login/LoginSlice";
import { useState } from "react";



export default function Checkout  ()  {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data, isSuccess, isLoading}= useUserCartQuery();
  const [addToCart]= useAddToCartMutation();
  const[removeItem] = useDeleteFromCartMutation();
  const {data: accountInfo} = useGetUserQuery();

  console.log(data);
  
  const handleReturnItem= async(ItemId) =>{
    try {
      await removeItem({ItemId});
      console.log('item successfully returned?');
      window.location.reload();
    } catch (err) {
      console.log('error while removing item from cart', err);
      
    }
  };
  
  const handleCheckout = () => {
    if (data.items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

 
  const clearCartFrontend = () => {
    // Clear the cart in frontend state (React state or Local Storage)
    setCartItems([]); // For React state
    localStorage.removeItem('cart'); // If you are using localStorage to persist cart
  };

    // const storedItems =
    //   JSON.parse(localStorage.getItem("purchasedItems")) || [];

    // // const updatedPurchasedItems = [...storedItems, ...cartItems];

    // localStorage.setItem(
    //   "purchasedItems",
    //   JSON.stringify(updatedPurchasedItems)
    // );

    alert("Purchase validated");

    // dispatch(clearCartFrontEnd());
    navigate("/account");
  };
console.log(data);

  const totalPrice = data?.items?.reduce((sum, item) => sum+ item.price, 0);
console.log("total price", totalPrice);

  let $details;
  //no items in the cart
  if(!data){
    $details = <p>no items in your cart</p>
  }
  else if (isLoading){
    $details = <p>loading cart items</p>
  }

  //display items
  else{
    $details=(
      <article>
        <ul className="cartItems">
        <h4>Hello{accountInfo.username}, {accountInfo.email}</h4>
        <h5>You have {data.items.length} items in your Cart</h5>
        <h5> Your total is: ${totalPrice} </h5>
        {data.items.map((p)=>
        <li key = {p.id} className="cartItems">
          <h3>{p.itemTitle} @ ${p.price}</h3>
          <figure>
            <img src={p.itemImage} alt={p.title} />
          </figure>
          <button type="button" className="btn btn-danger" onClick={() => handleReturnItem (p.itemId)}> Return </button>
        </li>
        )}
        </ul>
      </article>
    )
  }

  return (
    <aside>
        <h2>My Cart: </h2>
        {$details}
        <button onClick={handleCheckout}>Checkout</button>
        </aside>
)

}
//   return (
//     <div className="cart-container">
//       <h2>My Cart</h2>
//       <div>
//         {cartItems.length > 0 ? (
//           <div>
//             <h3> Cart</h3>
//             <h5> Your total is: ${totalPrice} </h5>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id} className="cart-item">
//                   <h3 className="cart-price">
//                     {item.title}, Price: {item.price},
//                   </h3>
//                   <figure>
//                     <img
//                       className="cart-image"
//                       src={item.image}
//                       alt={item.title}
//                     />
//                   </figure>
//                 </li>
//               ))}
//             </ul>

//             <button onClick={handleCheckout}>Checkout</button>
//           </div>
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Checkout;
