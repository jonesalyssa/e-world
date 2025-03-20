import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSwagQuery } from "./singleSwagSlice";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/cartSlice";
import "/src/index.css";

export default function SingleProduct({
  selectedProductId,
  setSelectedProductId,
}) {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetSwagQuery(id);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch(); // Get dispatch function

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
            Add to Cart
          </button>
        </div>
        <div className="single-pic">
          <figure className="single-product-image">
            <img
              className="single-image"
              src={data.image}
              alt={product.title}
            />
          </figure>
        </div>
      </section>
    </>
  );

  return (
    <aside>
      <h2 className="selected-product"></h2>
      {$details}
    </aside>
  );
}
