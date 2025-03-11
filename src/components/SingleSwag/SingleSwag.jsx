import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSwagQuery } from "./singleSwagSlice";

export default function SingleProduct({ selectedProductId,setSelectedProductId}) {
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
        <figure>
          <img src={data.image} />
        </figure>
        <h3>{product.title}</h3>
        Price: <h3> {product.price}</h3>
        Description: <h4>{data.description}</h4>
        {/* <h4> {product.available}</h4> */}
   
        <div className="book">
          {/* <button
            type="button"
            className="btn btn-primary "
            onClick={() => addtoCart(product.id)}
          >
            {" "}
            Checkout{" "}
          </button> */}
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
