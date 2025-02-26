import {
  useGetCartQuery,
  useRemoveFromCartMutation,
  useUpdateCartItemQuantityMutation,
} from "./cartSlice";
import { useState, useEffect, useMemo } from "react";


function Cart() {
  const { data: cartData, error, isLoading } = useGetCartQuery();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [updateQuantity] = useUpdateCartItemQuantityMutation();
  const [totals, setTotals] = useState({ subtotal: 0, shipping: 20, total: 0 });
const cart = useMemo(() => {
  return Array.isArray(cartData?.items) ? cartData.items : [];
}, [cartData?.items]);

  useEffect(() => {
    if (cart.length > 0) {
      let newSubtotal = 0;
      cart.forEach((item) => {
        newSubtotal += item.price * item.quantity;
      });
      setTotals((prevTotals) => ({
        ...prevTotals,
        subtotal: newSubtotal,
        total: newSubtotal + prevTotals.shipping,
      }));
    } else {
      setTotals({ subtotal: 0, total: 0 });
    }
  }, [cart, totals.shipping]);

  const handleRemove = (itemId, itemName) => {
    if (
      window.confirm(
        `Are you sure you want to remove "${itemName}" from your cart?`,
      )
    ) {
      removeFromCart(itemId);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity({ itemId, quantity: newQuantity });
    }
  };

  if (error) return <p>Error loading cart.</p>;
  if (isLoading) return <p>Loading cart...</p>;

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                      </a>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {cart.length} items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>{" "}
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3" id="cart-items">
                      {cart.map((item) => (
                        <div key={item.id} className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={item.image}
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>{item.name}</h5>
                                <p className="small mb-0">{item.description}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "80px" }}>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                  style={{ width: "50px" }}
                                />
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 className="mb-0">${item.price}</h5>
                              </div>
                              <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        {/* ... (card details form) */}
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2" id="subtotal">
                            ${totals.subtotal.toFixed(2)}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2" id="shipping">
                            ${totals.shipping.toFixed(2)}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2" id="total">
                            ${totals.total.toFixed(2)}
                          </p>
                        </div>
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-info btn-block btn-lg"
                          id="checkout-button"
                        >
                          <div className="d-flex justify-content-between">
                            <span id="checkout-total">${totals.total.toFixed(2)}</span>
                            <span>
                              Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;