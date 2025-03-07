import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSwagQuery } from "./singleSwagSlice";

export default function singleProduct(selectedProductId, setSelectedProductId) {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetSwagQuery(id);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setProduct(data.product);
    }
  }, [data]);

  let $details;
  // No Book Selected
  if (!selectedProductId) {
    $details = <p>Please select a product to see more details.</p>;
  }
  // A book has been selected, but results have not yet returned from the API
  else if (isLoading) {
    $details = <p>Loading Product information...</p>;
  }
  // Display Book Selected
  else {
    $details = (
      <>
        <h3>
          {product.title} {product.price}
        </h3>
        Description: <h4>{product.description}</h4>
        {/* <h4> {product.available}</h4> */}
        <figure>
          <img src={product.image} />
        </figure>
        <div className="book">
          <button
            type="button"
            className="btn btn-primary "
            onClick={() => addtoCart(product.id)}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      </>
    );
  }
  return (
    <aside>
      <h2>Selected Product:</h2>
      {$details}
    </aside>
  );
}
