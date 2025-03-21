import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./cartSlice";
import "/src/index.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(clearCart());
    navigate("/account");
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      <div>
        {cartItems.length > 0 ? (
          <div>
            <h3> Cart</h3>
            <h5> Your total is: ${totalPrice} </h5>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <h3 className="cart-price">
                    {item.title}, Price: {item.price},
                  </h3>
                  <figure>
                    <img
                      className="cart-image"
                      src={item.image}
                      alt={item.title}
                    />
                  </figure>
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
