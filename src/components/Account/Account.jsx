import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../Login/LoginSlice";
// import { setUser } from "./userSlice";
import { useUserCartQuery } from "../Cart/cartSlice";

export default function Account() {
  // const [user, setUser] = useState({});
  // const {data, error, isLoading} = useGetUserQuery();
  // const [purchasedSwags, setPurchasedSwags] = useState({});
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isError, error } = useGetUserQuery();
  const { data: cart } = useUserCartQuery();

  console.log(data);
  console.log(cart);
  console.log(isSuccess);
  console.log(isError);

  let $details;
  // No user logged in
  if (!data) {
    $details = <p>No user logged in</p>;
  }
  // User is logged in but loading data
  else if (isLoading) {
    $details = <p>Loading Your Account</p>;
  } else if (isError) {
    $details = <p>error loading your account</p>;
  }
  // display account info
  else if (data) {
    $details = (
      <article>
      <ul className="cartItems">
        <h4>Hello {data.username}, {data.email}</h4>
        <h5>You’ve purchased {cart?.items?.length || 0} item(s):</h5>
        <br/>

        {cart?.items?.map((p) => (
          <li key={p.id} className="cart-item">
            <div className="cart-image-container">
              <figure>
                <img
                  className="cart-image"
                  src={p.itemImage}
                  alt={p.itemTitle}
                />
              </figure>
            </div>

            <div className="cart-details">
              <h4>{p.itemTitle}</h4>
              <p>${p.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

  return (
    <aside>
      <h1>My ACCOUNT</h1>
      <br/>
      {$details}
    </aside>
  );
}
