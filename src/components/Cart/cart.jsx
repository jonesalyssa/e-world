// import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { clearCart } from "./cartSlice";
// import "../index.css";
=======
// import { clearCart } from "./cartSlice";
// import "../index.css";
import { useAddToCartMutation, useGetCartQuery, useDeleteFromCartMutation } from "./cartSlice";
import { useGetUserQuery } from "../Account/userSlice";
>>>>>>> 975e150b4225bf98ac16c2c1626bb852ea4367ad

export default function Cart ({userId, token}) {
  // const cartItems = useSelector((state) => state.cart.items);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: cartItems, isSuccess, isLoading, isError } = useGetCartQuery({ id: userId, token: token });
  const [addToCart] = useAddToCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();
  const {data: accountInfo} = useGetUserQuery();
  console.log(cartItems)
const handleDelete = async(itemId)=>{
  try {
    await deleteFromCart({itemId});
    console.log("Item removed from cart successfully!");
    window.location.reload();
  } catch (error) {
    console.error('Error removing item from your Cart', error)
  }
}

let $details;
// No items added to cart
if(!cartItems){
  $details = <p>No items added to Cart</p>
}
// Items have been added to cart but results are not returned yet
else if (isLoading){
  $details = <p>Loading items in Cart</p>
}
// display list of items in CART
else{
  $details =(
    <article>
      <ul className="cart">
        <h4>Hello{accountInfo.username}, ({accountInfo.email})</h4>
        <h5>You have {cartItems.length} items in your cart</h5>
        {cartItems.map((p)=>
        <li key ={p.id} className="cart">
          <h3>
            {p.title} & Price: {p.price}
            {p.description}
          </h3>
          <figure>
            <img src={p.image} alt={p.title} />
            <button type="button" className="btn btn-danger" onClick={() => handleDelete(p.id)}> Return </button>
          </figure>

        </li>
        )}
      </ul>
    </article>
  )
}

return(
  <aside>
    <h2>MY CART</h2>
    {$details}
  </aside>
)

  // const handleCheckout = () => {
  //   if (!cartItems || cartItems.length === 0) {
  //     alert("Your cart is empty!");
  //     return;
  //   }

  //   const storedItems =
  //     JSON.parse(localStorage.getItem("purchasedItems")) || [];

  //   const updatedPurchasedItems = [...storedItems, ...cartItems];

  //   localStorage.setItem(
  //     "purchasedItems",
  //     JSON.stringify(updatedPurchasedItems)
  //   );

  //   alert("Purchase validated");

  //   // dispatch(clearCart());
  //   // dispatch(clearCart());
  //   navigate("/account");
  // };
  // if (isLoading) {
  //   return <p>Loading cart...</p>;
  // }

  // if (isError) {
  //   return <p>There was an error loading your cart. Please try again later.</p>;
  // }

  // return (
  //   <div>
  //     <h2> MY CART</h2>
  //     <div>
  //       {cartItems && cartItems.length > 0 ? (
  //         <div>
  //           <h3> Cart</h3>
  //           <ul>
  //             {cartItems.items.map((item) => (
  //               <li key={item.id}>
  //                 {item.name}, {item.size}
  //                 {item.price}
  //                 <button onClick={() => deleteFromCart(item.id)}>Remove</button>
  //               </li>
  //             ))}
  //           </ul>
  //           <button onClick={handleCheckout}>Checkout</button>
  //         </div>
  //       ) : (
  //         <p>Your cart is empty.</p>
  //       )}
  //     </div>
  //   </div>
  // );
};

