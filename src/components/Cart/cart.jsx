import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "/src/index.css";
import { useGetCartQuery, useDeleteFromCartMutation } from "./cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: cartItems, isSuccess, isLoading } = useGetCartQuery({ userId });

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const storedItems =
      JSON.parse(localStorage.getItem("purchasedItems")) || [];

    const updatedPurchasedItems = [...storedItems, ...cartItems];

    localStorage.setItem(
      "purchasedItems",
      JSON.stringify(updatedPurchasedItems)
    );

    alert("Purchase validated");

    // dispatch(clearCart());
    navigate("/account");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cartItems.length > 0 ? (
          <div>
            <h3> Cart</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name}, {item.size}
                  {item.price}
                </li>
              ))}
            </ul>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
