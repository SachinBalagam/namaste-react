import { useDispatch } from "react-redux";
import { CARD_IMG } from "../utils/constants";
import { useState } from "react";
import { addItem } from "../utils/cartSlice";

const MenuInfo = (props) => {
  const { data, showItems, changeIndex } = props;
  const onAccordianClick = () => {
    changeIndex();
  };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div
      className=" bg-gray-100 my-4 py-4 px-10 w-[70%] cursor-pointer shadow-lg rounded-md"
      onClick={onAccordianClick}
    >
      <div className=" flex justify-between mb-4">
        <h1 className="font-bold">{data.title}</h1>
        <button>{showItems ? "⬆️" : "⬇️"}</button>
      </div>
      <ul>
        {showItems &&
          data.itemCards.map((each) => (
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
  );
};

export default MenuInfo;
