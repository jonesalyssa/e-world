import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSwagQuery } from "./singleSwagSlice";
import "/src/index.css";

export default function SingleProduct({
  selectedProductId,
  setSelectedProductId,
}) {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetSwagQuery(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      setProduct(data);
      setSelectedProductId(data.id);
    }
  }, [data, isSuccess, setSelectedProductId]);

  console.log(data);
  console.log(product);
  console.log(selectedProductId);

  if (isLoading) return <p>Loading Product information...</p>;
  if (!product) return <p>Please select a product to see more details.</p>;

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
            <button
              type="button"
              className="cart-button"
              onClick={() => addtoCart(product.id)}
            >
              Checkout
            </button>
          </div>
          <div className="single-pic">
            {/* <h4> {product.available}</h4> */}

            <figure className="single-product-image">
              <img className="single-image" src={data.image} />
            </figure>
          </div>
        </section>
      </>
    );
  }
  return (
    <aside>
      <h2 className="selected-product"></h2>
      {$details}
    </aside>
  );
}
