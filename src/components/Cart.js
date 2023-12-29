import { useDispatch, useSelector } from "react-redux";
import { CARD_IMG } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-[80vh]">
      <h1 className="text-center text-2xl font-bold my-3">Cart</h1>
      <div className="w-[50vw] m-auto">
        <button
          className="bg-black text-white rounded p-2"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <ul>
          {cartItems.map((each) => (
            <li className="border-b flex justify-between mb-3 pb-3 hover:bg-gray-200 items-center">
              <div>
                <h1 className="text-left">{each.card.info.name}</h1>
                <p className="text-left">₹{each.card.info.price / 100}</p>
                <p className="text-left">{each.card.info.discription}</p>
              </div>
              <div>
                <button
                  className="bg-black text-white rounded px-2 py-2 absolute"
                  onClick={() => handleAddItem(each)}
                >
                  Add +
                </button>

                <img
                  src={CARD_IMG + each.card.info.imageId}
                  alt="Cuisine-image"
                  className="w-[150] "
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
