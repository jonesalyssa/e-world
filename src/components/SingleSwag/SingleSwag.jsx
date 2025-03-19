import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSwagQuery } from "./singleSwagSlice";
<<<<<<< HEAD
import { useDispatch } from "react-redux"; // Import useDispatch
import { addItem } from "../Cart/cartSlice"; // Import addItem action
=======
import { useAddToCartMutation } from "../Cart/cartSlice";
>>>>>>> 975e150b4225bf98ac16c2c1626bb852ea4367ad
import "/src/index.css";

export default function SingleProduct({
  selectedProductId,
  setSelectedProductId,
}) {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetSwagQuery(id);
  const [product, setProduct] = useState(null);
<<<<<<< HEAD
  const dispatch = useDispatch(); // Get dispatch function
=======
  const [addtoCart] = useAddToCartMutation();
>>>>>>> 975e150b4225bf98ac16c2c1626bb852ea4367ad

  useEffect(() => {
    if (isSuccess) {
      setProduct(data);
      setSelectedProductId(data.id);
    }
  }, [data, isSuccess, setSelectedProductId]);

  const addtoCart = () => {
    if (product) {
      dispatch(addItem(product)); // Dispatch addItem action
      alert(`${product.title} added to cart!`);
    }
  };

  if (isLoading) return <p>Loading Product information...</p>;
  if (!product) return <p>Please select a product to see more details.</p>;

<<<<<<< HEAD
  let $details = (
    <>
      <h3 className="single-title">{product.title}</h3>
      <section className="product-details">
        <div className="single-product">
          <h4 className="price"> ${product.price}</h4>
          <br />
          <h4 className="description">{data.description}</h4>
          <button
            type="button"
            className="cart-button"
            onClick={addtoCart} // Call addtoCart
          >
            Checkout
          </button>
        </div>
        <div className="single-pic">
          <figure className="single-product-image">
            <img className="single-image" src={data.image} alt={product.title} />
          </figure>
        </div>
      </section>
    </>
  );
=======
  console.log(product.title);
  let $details;
  if (!selectedProductId) {
    $details = <p>Please select a product to see more details.</p>;
  } else if (isLoading) {
    $details = <p>Loading Product information...</p>;
  } else {
    $details = (
      <>
        <h3 className="single-title">{product.title}</h3>
        <section className="product-details">
          <div className="single-product">
            <h4 className="price"> ${product.price}</h4>
            <br />
            <h4 className="description">{data.description}</h4>
            <br />
            <button
              type="button"
              className="cart-button"
              onClick={() => addtoCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
          <div className="single-pic">
            {/* <h4> {product.available}</h4> */}
>>>>>>> 975e150b4225bf98ac16c2c1626bb852ea4367ad

  return (
    <aside>
      <h2 className="selected-product"></h2>
      {$details}
    </aside>
  );
}